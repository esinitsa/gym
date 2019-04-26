import React from "react";
import { Container, Content, Card, CardItem, Item, Label, Input } from "native-base";
import { renderHeader } from "./components/header";
import { connect } from "react-redux";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import { Field, reduxForm, formValueSelector, reset } from "redux-form";
import NoteItem from "../common/notes/listItem";
import { getUserById, addInternalRecord } from "../../components/personal/actions";
import { I18n } from "react-redux-i18n";
import { showToast } from "../../services/UIActions";
import styles, { DEVICE_WIDTH, DEVICE_HEIGHT } from "./styles";
import { CustomText } from "../common/text/customText";
import Icon from "react-native-vector-icons/AntDesign";

class UserNotes extends React.PureComponent {
    state = {
        isExpanded: false
    };

    componentDidMount() {
     this.getData();
    }
    
    getData = () => {
      const { getUserInfo, navigation } = this.props;
      const user = navigation.getParam("user");
      if (!user) { navigation.goBack(); }
      getUserInfo(user.userProfile.id);
    }


    renderInput = ({ input }) => {
      return (
          <Item>
              <Input
                autoCapitalize="none"
                style={{ color: "black", borderWidth: 1, height: 120, fontSize: 16, borderColor: "#dcdbdc", padding: 0, margin: 0}} // TODO move to styles.js
                autoCorrect={false}
                multiline={true}
                keyboardType={input.name === "login" ? "email-address" : "default"}
                {...input}
              />
          </Item>
      );
    }


    addInternal = () => {
      const internalRecord = {
        authorRole: "DOCTOR",
        recordBody: this.props.notes,
        targetUserId: this.props.currentUser.userProfile.id
      };
        this.props.addInternalRecord(internalRecord).then( res => {
          showToast("Заметка добавлена");
          this.setState({
            isExpanded: false
          });
            this.props.resetForm();
            this.getData();
        });
          
    };


    handleExpand = () => {
        this.setState(state => ({ isExpanded: !state.isExpanded }));
    }
    renderContent = () => {
        const { userInfo } = this.props;
        if (!userInfo) { return null; }
        const { isExpanded } = this.state;
        return (
            <Content style={{ flex: 1 }}>
                <View style={{ ...styles.touchableCard, marginVertical: 10, shadowColor: "#e7f2ff",  zIndex: 200}}>
                    <Card style={{ ...styles.card, paddingVertical: 10 }}>
                        <CardItem header bordered={isExpanded} style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0 }}>
                            <CustomText text="Добавить заметку" style={styles.noteTitle} />
                            <View style={{ alignContent: "center", alignItems: "flex-end", alignSelf: "center" }}>
                                <TouchableOpacity onPress={this.handleExpand}>
                                    <Icon name="edit" color="#086ab2" size={25} solid />
                                </TouchableOpacity>
                            </View>
                        </CardItem>
                        {isExpanded && (
                            <CardItem style={{ flex: 1, flexDirection: "column",  paddingLeft: 0, paddingRight: 0}}>
                              <Field
                                  name="notes"
                                  component={this.renderInput}
                                  type="notes"
                                />
                            <TouchableOpacity style={styles.button} onPress={this.addInternal}>
                              <CustomText style={styles.buttonText} text={"Сохранить"} />
                            </TouchableOpacity>
                            </CardItem>
                        )}
                    </Card>
                </View>
                {!!userInfo.internalRecords && [...userInfo.internalRecords].map(it => (
                    <View style={styles.touchableCard}>
                        <Card style={styles.card}>
                            <NoteItem note={it} />
                        </Card>
                    </View>
                ))}
                {!userInfo.internalRecords || !userInfo.internalRecords.length
                    ? (
                        <View style={{ position: "absolute", alignContent: "center", alignItems: "center", alignSelf: "center", marginTop: DEVICE_HEIGHT / 2.4 }}>
                            <CustomText
                                style={{ fontSize: 20, color: "grey", textAlign: "center", paddingHorizontal: 15, paddingVertical: 20, zIndex: 100 }}
                                text={"На данный момент нет заметок"} />
                        </View>
                    ) : null
                }
            </Content>

        );
    };

    render() {
        return (
            <Container>
                {renderHeader(this.props)}
                <SafeAreaView style={{ flex: 1 }}>
                    {this.renderContent()}
                </SafeAreaView>
            </Container>
        );
    }
}

const Notes = reduxForm({
  form: "notes"
})(UserNotes);

const selector = formValueSelector("notes");

const mapStateToProps = state => ({
    currentUser: state.user,
    userInfo: state.personal.user,
    notes: selector(state, "notes"),
});

const mapDispatchToProps = dispatch => ({
    getUserInfo: id => dispatch(getUserById(id)),
    addInternalRecord: internalRecord => dispatch(addInternalRecord(internalRecord)),
    resetForm: () => dispatch(reset("notes"))
});
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
