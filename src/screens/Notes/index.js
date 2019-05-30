import {
  Card,
  CardItem,
  Container,
  Content,
  Input,
  Item,
  Picker,
  Left,
  Right,
  Form
} from "native-base";
import { size } from "lodash";
import React from "react";
import { SafeAreaView, TouchableOpacity, View, StatusBar } from "react-native";
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
import { I18n } from "react-redux-i18n";
import { renderHeader } from "./components/header";
import { ROLES } from "../../constants/userTypes";
import { filter, reverseArray, isEqualUsers } from "../../services/filter";
import styles from "./styles";
import theme from "../../styles";

class UserNotes extends React.PureComponent {
  state = {
    isExpanded: false,
    selected: 0
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

  onValueChange = value => {
    this.setState({
      selected: value
    });
  };

  renderInput = ({ input }) => {
    return (
      <Item>
        <Input
          autoCapitalize="none"
          style={styles.input}
          autoCorrect={false}
          multiline={true}
          keyboardType={input.name === "login" ? "email-address" : "default"}
          {...input}
        />
      </Item>
    );
  };

  renderPicker = () => {
    return (
      <Left style={styles.pickerContainer}>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={styles.pickerView}
            textStyle={styles.pickerText}
            selectedValue={this.state.selected}
            itemTextStyle={styles.pickerItemText}
            headerTitleStyle={styles.bodyHeaderText}
            headerBackButtonTextStyle={styles.pickerBackHeader}
            iosIcon={
              <Icon
                name={"down"}
                color={theme.colors.primary}
                solid
                style={styles.dropDownArrow}
              />
            }
            onValueChange={this.onValueChange}
          >
            {filter(this.props.currentUser.roles).map((item, index) => (
              <Picker.Item
                label={I18n.t(`${ROLES[item]}`)}
                value={index}
                key={`${this.props.currentUser.id}${item}`}
              />
            ))}
          </Picker>
        </Form>
      </Left>
    );
  };

  addInternal = () => {
    const internalRecord = {
      authorRole: filter(this.props.currentUser.roles)[this.state.selected],
      recordBody: this.props.note,
      targetUserId: this.props.userInfo.id,
      authorName: `${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`
    };
    this.props.addInternalRecord(internalRecord).then(res => {
      showToast(I18n.t("profile.noteAdded"));
      this.setState({
        isExpanded: false
      });
      this.props.resetForm();
      this.getData();
    });
  };

  handleExpand = () =>
    this.setState(state => ({ isExpanded: !state.isExpanded }));

  renderContent = () => {
    const { userInfo, currentUser } = this.props;
    if (!userInfo) {
      return null;
    }
    const { isExpanded } = this.state;
    return (
      <Content style={styles.content}>
        <View style={styles.touchableCard}>
          {!isEqualUsers(userInfo, currentUser) && (
            <Card style={styles.topCard}>
              <TouchableOpacity onPress={this.handleExpand}>
                <CardItem
                  header
                  bordered={isExpanded}
                  style={styles.addNoteCardItem}
                >
                  <CustomText
                    text={I18n.t("profile.addNote")}
                    style={styles.noteTitle}
                  />
                  <View style={styles.editIconView}>
                    <Icon
                      name="edit"
                      color={theme.colors.primary}
                      size={theme.size.icons.small}
                      solid
                    />
                  </View>
                </CardItem>
              </TouchableOpacity>
              {isExpanded && (
                <CardItem style={styles.noteCardItem}>
                  <Field name="note" component={this.renderInput} type="note" />
                  <View style={styles.saveNoteView}>
                    {this.renderPicker()}
                    <Right>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={this.addInternal}
                      >
                        <CustomText
                          style={styles.buttonText}
                          text={I18n.t("general.save")}
                        />
                      </TouchableOpacity>
                    </Right>
                  </View>
                </CardItem>
              )}
            </Card>
          )}
        </View>
        {reverseArray(userInfo, "internalRecords").map((it, index) => (
          <View style={styles.touchableCard} key={`${it.authorUserId}${index}`}>
            <Card style={styles.card}>
              <NoteItem note={it} />
            </Card>
          </View>
        ))}
        {!size(userInfo.internalRecords) ? (
          <View style={styles.emptyNotesView}>
            <CustomText
              style={styles.emptyNotesInfo}
              text={I18n.t("profile.emptyNotes")}
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
        <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          {this.renderContent()}
        </SafeAreaView>
      </Container>
    );
  }
}

const Notes = reduxForm({
  form: "note"
})(UserNotes);

const selector = formValueSelector("note");

const mapStateToProps = state => ({
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  note: selector(state, "note")
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: id => dispatch(getUserById(id)),
  addInternalRecord: internalRecord =>
    dispatch(addInternalRecord(internalRecord)),
  resetForm: () => dispatch(reset("note"))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
