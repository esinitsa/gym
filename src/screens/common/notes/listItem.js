import { get } from "lodash";
import { Body, Left, ListItem, Right, View } from "native-base";
import React from "react";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { EMPTY_RESPONSE } from "../../../constants";
import { getNotesAuthorById } from "../../../components/personal/actions";
import { ROLES } from "../../../constants/userTypes";
import { getDateWithFormat } from "../../../services/dateManager";
import { CustomText } from "../text/customText";
import ViewMoreCustomText from "../viewMoreText/index";
import styles from "./styles";

class NoteItem extends React.PureComponent {
  render() {
    const { note } = this.props;
    if (!note) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ListItem style={styles.listItem}>
          <Left style={styles.leftView}>
            {get(note, "authorName", EMPTY_RESPONSE) ? (
              <CustomText text={note.authorName} style={styles.notesAuthor} />
            ) : (
              <CustomText
                text={I18n.t("types.admin")}
                style={styles.notesAuthor}
              />
            )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteItem);
