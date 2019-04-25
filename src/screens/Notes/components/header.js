import React from 'react';
import { Button, Header, Left, Right } from "native-base";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Transition } from "react-navigation-fluid-transitions";
import { CustomText } from "../../common/text/customText";
import styles from '../styles';
import { View } from 'react-native';
import { NavigationType } from '../../../constants/navigationTypes';

export const renderHeader = props => {

    const goToProfile = () => {
        props.navigation.navigate(NavigationType.Profile);
    }

    const { userInfo } = props;

    return (
        <Header style={styles.header}>
            <Left style={styles.leftHeader}>
                <Transition appear="flip" disappear="flip" shared="card">
                    <View style={{}}>
                        <CustomText text={"Заметки"} style={styles.leftHeaderText} />
                        <CustomText text={`${userInfo.firstName} ${userInfo.lastName}`} style={{ fontSize: 14, color: 'grey' }} />
                    </View>
                </Transition>
            </Left>
            <Right>
                <Button
                    onPress={goToProfile}
                    transparent
                    style={styles.profileIconHeader}
                >
                    <EvilIcons name={"user"} color="#086ab2" size={40} solid />
                </Button>
            </Right>
        </Header>
    );
}