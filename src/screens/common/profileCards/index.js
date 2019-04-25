import _ from "lodash";
import { Card, CardItem, View } from "native-base";
import React from "react";
import { I18n } from "react-redux-i18n";
import { COUNT, DATE_TYPE, DEFAULT_COUNT, EMPTY_RESPONSE, TERM } from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default class ProfileCards extends React.PureComponent {
  constructor(props) {
    super(props);
    const subscriptionNumber =
      _.get(this.props.user, "subscriptions.length", 1) - 1;
    this.state = { subscriptionNumber };
  }
  renderCardItem = (user, prop, iconName) => (
    <CardItem style={styles.cardItem}>
      <MaterialCommunityIcons name={iconName} style={{color: "#DCDCDC", marginRight: 10}} size={20} solid />
      <CustomText
        style={styles.cardText}
        text={_.get(user, `${prop}`, I18n.t(`login.placeholders.${prop}`))}
      />
    </CardItem>
  );

  checkSubscriptionVisits = (user, prop) => {
    const type = _.get(user, `${prop}`, EMPTY_RESPONSE);
    if (type === COUNT) {
      const countInitial = _.get(
        user,
        `subscriptions[${this.state.subscriptionNumber}].countInitial`,
        EMPTY_RESPONSE
      );
      const countLeft = _.get(
        user,
        `subscriptions[${this.state.subscriptionNumber}].countLeft`,
        countInitial
      );
      return `${countLeft}/${countInitial}`;
    } else if (type === TERM) {
      return this.checkDate(
        user,
        `subscriptions[${this.state.subscriptionNumber}].validTill`
      );
    }
    return DEFAULT_COUNT;
  };

  checkSubscriptionType = (user, prop) => {
    const type = _.get(user, `${prop}`, EMPTY_RESPONSE);
    if (type === COUNT) {
      return I18n.t("profile.numberOfVisits");
    } else if (type === TERM) {
      return I18n.t("profile.validTill");
    }
    return I18n.t("profile.numberOfVisits");
  };

  checkDate = (user, prop) => {
    const date = _.get(user, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return new Date(date).toLocaleDateString(DATE_TYPE);
    }
  };

  render() {
    const { user } = this.props;
    return (
      <View>
        <Card style={styles.card}>
          {this.renderCardItem(user, "email", "email")}
          {this.renderCardItem(user, "firstName", "account-details" )}
          {this.renderCardItem(user, "lastName", "account-details")}
          {this.renderCardItem(user, "locale", "map-marker")}
        </Card>
        <View style={styles.cardRow}>
          <Card style={styles.leftCard}>
            <CustomText
              style={styles.startDateText}
              text={
                user !== null ? I18n.t("profile.startDate") : EMPTY_RESPONSE
              }
            />
            <CustomText
              style={styles.dateText}
              text={this.checkDate(
                user,
                `subscriptions[${this.state.subscriptionNumber}].startDate`
              )}
            />
          </Card>
          <Card style={styles.rightCard}>
            <CustomText
              style={styles.visitsAmountText}
              text={this.checkSubscriptionType(
                user,
                `subscriptions[${
                  this.state.subscriptionNumber
                }].subscriptionType`
              )}
            />
            <CustomText
              style={styles.visitsNumber}
              text={this.checkSubscriptionVisits(
                user,
                `subscriptions[${
                  this.state.subscriptionNumber
                }].subscriptionType`
              )}
            />
          </Card>
        </View>
      </View>
    );
  }
}
