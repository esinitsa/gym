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
import { I18n } from "react-redux-i18n";
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
      recordBody: this.props.note,
      targetUserId: this.props.userInfo.id
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

  handleExpand = () => this.setState(state => ({ isExpanded: !state.isExpanded }));

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
                    text={I18n.t("profile.addNote")}
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
                    name="note"
                    component={this.renderInput}
                    type="note"
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.addInternal}
                  >
                    <CustomText style={styles.buttonText} text={I18n.t("general.save")} />
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
