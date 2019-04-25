import React from 'react';
import { Container, Content, Card, CardItem } from 'native-base';
import { renderHeader } from './components/header';
import { connect } from 'react-redux';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import NoteItem from '../common/notes/listItem';
import { getUserById } from '../../components/personal/actions';
import styles, { DEVICE_WIDTH, DEVICE_HEIGHT } from './styles';
import { CustomText } from '../common/text/customText';
import Icon from "react-native-vector-icons/AntDesign";
class UserNotes extends React.PureComponent {
    state = {
        isExpanded: false,
    };

    componentDidMount() {
        const { getUserInfo, navigation } = this.props;
        const user = navigation.getParam('user');
        if (!user) { navigation.goBack(); }
        getUserInfo(user.userProfile.id);
    }

    handleExpand = () => {
        this.setState(state => ({ isExpanded: !state.isExpanded }));
    }
    renderContent = () => {
        const { userInfo } = this.props;
        if (!userInfo) { return null; }
        const { isExpanded } = this.state;
        return (
            <Content style={{ flex: 1 }}>
                <View style={{ ...styles.touchableCard, marginVertical: 10, shadowColor: "#e7f2ff", }}>
                    <Card style={{ ...styles.card, paddingVertical: 10 }}>
                        <CardItem header bordered={isExpanded} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 0, paddingRight: 0 }}>
                            <CustomText text='Добавить заметку' style={styles.noteTitle} />
                            <View style={{ alignContent: 'center', alignItems: 'flex-end', alignSelf: 'center' }}>
                                <TouchableOpacity onPress={this.handleExpand}>
                                    <Icon name="edit" color="#086ab2" size={25} solid />
                                </TouchableOpacity>
                            </View>
                        </CardItem>
                        {isExpanded && (
                            <CardItem>

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
                        <View style={{ position: 'absolute', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: DEVICE_HEIGHT / 2.4 }}>
                            <CustomText
                                style={{ fontSize: 20, color: 'grey', textAlign: 'center', paddingHorizontal: 15, paddingVertical: 20 }}
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
const mapStateToProps = state => ({
    currentUser: state.user,
    userInfo: state.personal.user,
});

const mapDispatchToProps = dispatch => ({
    getUserInfo: id => dispatch(getUserById(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserNotes);