import { Card, CardItem, Container, Content, Input, Item } from "native-base";
import _ from "lodash";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm, reset } from "redux-form";
import {
  addInternalRecord,
  getUserById
} from "../../components/personal/actions";
import { showToast } from "../../services/UIActions";
import NoteItem from "../common/notes/listItem";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import styles from "./styles";
import theme from "../../styles";

class UserNotes extends React.PureComponent {
  state = {
    isExpanded: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { getUserInfo, navigation } = this.props;
    const id = navigation.getParam("id");
    if (!id) {
      navigation.goBack();
    }
    getUserInfo(id);
  };

  renderInput = ({ input }) => {
    return (
      <Item>
        <Input
          autoCapitalize="none"
          style={styles.input} // TODO move to styles.js
          autoCorrect={false}
          multiline={true}
          keyboardType={input.name === "login" ? "email-address" : "default"}
          {...input}
        />
      </Item>
    );
  };

  addInternal = () => {
    const internalRecord = {
      authorRole: "DOCTOR",
      recordBody: this.props.notes,
      targetUserId: this.props.userInfo.id
    };
    this.props.addInternalRecord(internalRecord).then(res => {
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
  };
  renderContent = () => {
    const { userInfo, currentUser } = this.props;
    if (!userInfo) {
      return null;
    }
    const { isExpanded } = this.state;
    return (
      <Content style={styles.content}>
        <View style={styles.touchableCard}>
          {_.get(userInfo, "id", 0) !== _.get(currentUser, "id", 1) && (
            <Card style={styles.topCard}>
              <TouchableOpacity onPress={this.handleExpand}>
                <CardItem
                  header
                  bordered={isExpanded}
                  style={styles.addNoteCardItem}
                >
                  <CustomText
                    text="Добавить заметку"
                    style={styles.noteTitle}
                  />
                  <View style={styles.editIconView}>
                    <Icon name="edit" color={theme.colors.actionComponent} size={25} solid />
                  </View>
                </CardItem>
              </TouchableOpacity>
              {isExpanded && (
                <CardItem style={styles.noteCardItem}>
                  <Field
                    name="notes"
                    component={this.renderInput}
                    type="notes"
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.addInternal}
                  >
                    <CustomText style={styles.buttonText} text={"Сохранить"} />
                  </TouchableOpacity>
                </CardItem>
              )}
            </Card>
          )}
        </View>
        {!!userInfo.internalRecords &&
          [...userInfo.internalRecords].map((it, index) => (
            <View
              style={styles.touchableCard}
              key={`${it.authorUserId}${index}`}
            >
              <Card style={styles.card}>
                <NoteItem note={it} />
              </Card>
            </View>
          ))}
        {!userInfo.internalRecords || !userInfo.internalRecords.length ? (
          <View style={styles.emptyNotesView}>
            <CustomText
              style={styles.emptyNotesInfo}
              text={"На данный момент нет заметок"}
            />
          </View>
        ) : null}
      </Content>
    );
  };

  render() {
    return (
      <Container>
        {renderHeader(this.props)}
        <SafeAreaView style={styles.container}>
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
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  notes: selector(state, "notes")
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: id => dispatch(getUserById(id)),
  addInternalRecord: internalRecord =>
    dispatch(addInternalRecord(internalRecord)),
  resetForm: () => dispatch(reset("notes"))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
