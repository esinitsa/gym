import _ from "lodash";
import { Button, Container, Header, Left, Right, View } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationType } from "../../constants/navigationTypes";
import { EMPTY_RESPONSE } from "../../constants/profileConstants";
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

class UserPreview extends React.PureComponent {
  goToPersonalPanel = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.PersonalPanel);
  };

  goToSubscriptionList = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SubscriptionList, {
      user
    });
  };

  render() {
    const userProfile = this.props.navigation.state.params.user;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <CustomText
              text={
                `${_.get(userProfile, "firstName", EMPTY_RESPONSE)}` +
                ` ${_.get(userProfile, "lastName", EMPTY_RESPONSE)}`
              }
              style={styles.leftHeaderText}
            />
          </Left>
          <Right>
            <Button onPress={this.goToPersonalPanel} transparent>
              <CustomText style={styles.rightHeaderText} text={"Done"} />
            </Button>
          </Right>
        </Header>
        <SafeAreaView style={styles.container}>
          <View style={styles.infoView}>
            <CustomText
              style={styles.userInfoText}
              text={_.get(userProfile, "email", EMPTY_RESPONSE)}
            />
            <CustomText
              style={styles.userInfoText}
              text={_.get(userProfile, "locale", EMPTY_RESPONSE)}
            />
          </View>
          <View style={styles.infoView}>
            <View style={styles.cardView}>
              <SubscriptionListItem
                subscription={_.head(userProfile.subscriptions)}
              />
              <Button
                onPress={() => this.goToSubscriptionList(userProfile)}
                transparent
              >
                <Ionicons
                  name={"ios-arrow-forward"}
                  color="#007bff"
                  size={25}
                  solid
                />
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

export default UserPreview;
