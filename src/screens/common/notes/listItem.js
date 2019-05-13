import { get } from "lodash";
import { Body, Left, ListItem, Right, View } from "native-base";
import React from "react";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { getNotesAuthorById } from "../../../components/personal/actions";
import { EMPTY_RESPONSE } from "../../../constants";
import { CustomText } from "../text/customText";
import ViewMoreCustomText from "../viewMoreText/index";
import { ROLES } from "../../../constants/userTypes";
import { checkAdmin } from "../../../services/filter";
import { getDateWithFormat } from "../../../services/dateManager";
import styles from "./styles";

class NoteItem extends React.PureComponent {

  componentDidMount() {
    this.props.getAuthor(this.props.note.authorUserId);
  }

  render() {
    const { note, author } = this.props;
    if (!note) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ListItem style={styles.listItem}>
          <Left style={styles.leftView}>
          {
            checkAdmin(get(author,"roles")) ?
            <CustomText text={
              `${get(author, "firstName", EMPTY_RESPONSE)} ` +
              `${get(author, "lastName", EMPTY_RESPONSE)}`} style={styles.notesAuthor} />
            :
            <CustomText text={I18n.t("types.admin")} style={styles.notesAuthor} />
          }
          </Left>
          <Body style={styles.bodyView}>
            <CustomText
              text={getDateWithFormat(note.createdAt)}
              style={styles.date}
            />
          </Body>
          <Right style={styles.rightView}>
            <View style={styles.rightContentView}>
              <CustomText
                text={I18n.t(`${ROLES[note.authorRoleId]}`)}
                style={styles.authorRole}
              />
            </View>
          </Right>
        </ListItem>
        <ViewMoreCustomText
          text={note.internalCommentText}
          style={styles.notesText}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  author: state.personal.author
});

const mapDispatchToProps = dispatch => ({
  getAuthor: id => dispatch(getNotesAuthorById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
