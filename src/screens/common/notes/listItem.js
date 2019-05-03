import moment from "moment";
import { Body, Left, ListItem, Right, View } from "native-base";
import React from "react";

import ViewMoreCustomText from "../viewMoreText/index";
import { connect } from "react-redux";
import { getUserById } from "../../../components/personal/actions";
import { DATE_FORMAT } from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import styles from "./styles";
// TODO move to i18n
export const ROLES = {
  ["DOCTOR"]: "Доктор"
};

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
            <CustomText text={"Escobar E."} style={styles.notesAuthor} />
          </Left>
          <Body style={styles.bodyView}>
            <CustomText
              text={moment(note.createdAt).format(DATE_FORMAT)}
              style={styles.date}
            />
          </Body>
          <Right style={styles.rightView}>
            <View style={styles.rightContentView}>
              <CustomText
                text={ROLES[note.authorRoleId]}
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
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUserById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteItem);
