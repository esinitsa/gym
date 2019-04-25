import { View, ListItem, Left, Right, Body } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { getUserById } from '../../../components/personal/actions';
import { CustomText } from '../text/customText';
import moment from 'moment';
import { DATE_FORMAT } from '../../../constants/profileConstants';
import FontAwesome5 from "react-native-vector-icons/EvilIcons";
// TODO move to i18n
export const ROLES = {
    ["DOCTOR"]: 'Доктор',
};

class NoteItem extends React.PureComponent {
    render() {
        const { note } = this.props;
        if (!note) { return null; }

        return (
            <View style={{ paddingLeft: 0, paddingBottom: 0, paddingRight: 0, paddingTop: 0, width: '100%' }}>
                <ListItem style={{ width: '100%', flexDirection: 'row', paddingLeft: 0, paddingBottom: 0, paddingRight: 0, paddingTop: 0, marginLeft: 0, marginBottom: 10, borderBottomWidth: 0 }}>
                    <Left style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
                        <CustomText text={'Escobar E.'} style={{ fontSize: 16, fontWeight: 'bold' }} />
                    </Left>
                    <Body style={{ flex: 1, alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <CustomText text={moment(note.createdAt).format(DATE_FORMAT)} style={{ color: 'grey', fontSize: 13, fontWeight: '400' }} />
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            {/* <FontAwesome5 name="user" color="#007bff" size={30} solid /> */}
                            <CustomText text={ROLES[note.authorRoleId]} style={{ color: '#086ab2', fontSize: 16, fontWeight: 'bold' }} />
                        </View>
                    </Right>
                </ListItem>
                <CustomText numberOfLines={2} text={note.internalCommentText} style={{ fontSize: 13, color: 'grey', fontWeight: '200' }} />
            </View>
        );
    }
};
const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    getUser: id => dispatch(getUserById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);