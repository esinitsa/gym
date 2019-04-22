import _ from "lodash";
import moment from "moment";
import React from "react";
import { View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { COUNT, DATE_FORMAT, DEFAULT_COUNT, EMPTY_RESPONSE } from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class SubscriptionListItem extends React.Component {
  lastVisitDate = previouslyValidated => {
    if (!_.isArray(previouslyValidated)) {
      return EMPTY_RESPONSE;
    } else {
      return moment(_.last(previouslyValidated)).format(DATE_FORMAT);
    }
  };

  checkDate = (subscription, prop) => {
    const date = _.get(subscription, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return moment(date).format(DATE_FORMAT);
    }
  };

  checkCountVisits = subscription => {
    const countInitial = _.get(subscription, "countInitial", DEFAULT_COUNT);
    const countLeft = _.get(subscription, "countLeft", DEFAULT_COUNT);
    return `${countLeft}/${countInitial}`;
  };

  renderSubscriptionType = (subscription, prop) => {
    const type = _.get(subscription, `${prop}`, EMPTY_RESPONSE);
    return (
      <View>
        {type === COUNT ? (
          <CustomText
            style={styles.subscriptionTypeView}
            text={this.checkCountVisits(subscription)}
          />
        ) : (
          <Octicons name={"calendar"} color="white" size={40} />
        )}
      </View>
    );
  };

  checkSubscriptionType = (subscription, prop) => {
    const type = _.get(subscription, `${prop}`, EMPTY_RESPONSE);
    return type === COUNT
      ? this.checkCountActive(subscription)
      : this.checkTermActive(subscription);
  };

  checkCountActive = subscription => {
    const isActive = _.get(subscription, "active", EMPTY_RESPONSE);
    return (
      <View>
        {isActive ? (
          <CustomText style={styles.activeText} text={"active"} />
        ) : (
          <CustomText style={styles.inactiveText} text={"inactive"} />
        )}
      </View>
    );
  };

  checkTermActive = subscription => {
    const isActive = _.get(subscription, "active", EMPTY_RESPONSE);
    const endDate = this.checkDate(subscription, "validTill");
    return (
      <View>
        {isActive ? (
          <View style={{flexDirection: "row"}}>
            <CustomText style={styles.activeText} text={"active:"} />
            <CustomText text={endDate} />
          </View>
        ) : (
          <CustomText style={styles.inactiveText} text={"inactive"} />
        )}
      </View>
    );
  };
  render() {
    const { userProfile } = this.props;
    const { subscription } = this.props;
    return (
      <View style={{flexDirection: "row"}}>
        <View style={styles.typeIcon}>
          {this.renderSubscriptionType(
            subscription,
            "subscriptionType"
          )}
        </View>
        <View>
          <CustomText
            style={styles.listText}
            text={`Last Visit: ${this.lastVisitDate(
              _.get(subscription,"previouslyValidated", EMPTY_RESPONSE)
            )}`}
          />
          {this.checkSubscriptionType(
            subscription,
            "subscriptionType"
          )}
        </View>
    </View>
    );
  }
}
