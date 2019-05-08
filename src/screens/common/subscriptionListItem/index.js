import _ from "lodash";
import moment from "moment";
import React from "react";
import { TouchableOpacity, View, Alert } from "react-native";
import { I18n } from "react-redux-i18n";
import Icon from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { showToast } from "../../../services/UIActions";
import {
  COUNT,
  DATE_FORMAT,
  DEFAULT_COUNT,
  EMPTY_RESPONSE
} from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import styles from "./styles";
import theme from "../../../styles";

export default class SubscriptionListItem extends React.PureComponent {
  state = {
    isExpanded: false
  };

  acceptMarkVisit = subscriptionId => {
    const performMarkVisit = () => {
      this.props
        .markUserVisit(subscriptionId)
        .then(res => showToast(I18n.t("general.markVisit")));
    };
    Alert.alert(
      I18n.t("mark.header"),
      I18n.t("mark.description"),
      [
        {
          text: I18n.t("mark.cancel"),
          style: "cancel"
        },
        {
          text: I18n.t("mark.confirm"),
          onPress: performMarkVisit
        }
      ],
      { cancelable: true }
    );
  };

  lastVisitDate = previouslyValidated =>
    _.isArray(previouslyValidated)
      ? moment(_.last(previouslyValidated))
          .locale("ru")
          .format(DATE_FORMAT)
      : EMPTY_RESPONSE;

  checkDate = (subscription, prop) => {
    const date = _.get(subscription, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return moment(date)
        .locale("ru")
        .format(DATE_FORMAT);
    }
  };

  checkCountVisits = subscription =>
    _.get(subscription, "countInitial", DEFAULT_COUNT);

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
          <Octicons name={"calendar"} color="white" size={theme.size.icons.medium} />
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
          <View style={styles.activeView}>
            <CustomText style={styles.activeLabel} text={I18n.t("general.remainder")} />
            <CustomText
              style={styles.activeText}
              text={subscription.countLeft}
            />
          </View>
        ) : (
          <CustomText style={styles.inactiveText} text={I18n.t("general.inactive")} />
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
          <View style={styles.activeView}>
            <CustomText style={styles.activeLabel} text={I18n.t("general.activeBy")} />
            <CustomText style={styles.activeText} text={endDate} />
          </View>
        ) : (
          <CustomText style={styles.inactiveText} text={I18n.t("general.expired")} />
        )}
      </View>
    );
  };

  handleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  renderInfoRow = (label, value, color) => {
    return (
      <View style={styles.infoView}>
        <View>
          <CustomText style={styles.infoViewLabelText} text={label} />
        </View>
        <View>
          <CustomText
            style={[
              styles.infoViewText,
              { color: color ? color : theme.colors.primary }
            ]}
            text={value}
          />
        </View>
      </View>
    );
  };
  render() {
    const { subscription, withExtension, isAdminPreview } = this.props;
    const { isExpanded } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subscriptionInfoView}>
          <View style={styles.rowView}>
            <View style={styles.typeIcon}>
              {this.renderSubscriptionType(subscription, "subscriptionType")}
            </View>
            <View style={styles.textInfoView}>
              {this.checkSubscriptionType(subscription, "subscriptionType")}
              <View style={styles.lastVisitView}>
                <CustomText style={styles.listText} text={I18n.t("general.lastVisit")} />
                <CustomText
                  style={styles.listText}
                  text={`${this.lastVisitDate(
                    _.get(subscription, "previouslyValidated", EMPTY_RESPONSE)
                  )}`}
                />
              </View>
            </View>
          </View>
          {withExtension && (
            <View style={styles.clickableArrow}>
              <TouchableOpacity onPress={this.handleExpand}>
                <Icon
                  name={isExpanded ? "up" : "down"}
                  color={theme.colors.primary}
                  size={theme.size.icons.small}
                  solid
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {withExtension && isExpanded && (
          <View style={styles.additionalInfoView}>
            {!!subscription.active &&
              this.renderInfoRow(
                I18n.t("profile.active"),
                subscription.active ? I18n.t("general.yes") : I18n.t("general.no"),
                subscription.active ? "green" : "red"
              )}
            {!!subscription.subscriptionType &&
              this.renderInfoRow(
                I18n.t("profile.type"),
                subscription.subscriptionType === "TERM"
                  ? I18n.t("profile.period")
                  : I18n.t("profile.numberOfVisits")
              )}
            {!!subscription.startDate &&
              this.renderInfoRow(
                I18n.t("profile.startDate"),
                moment(subscription.startDate)
                  .locale("ru")
                  .format(DATE_FORMAT)
              )}
            {!!subscription.validTill &&
              this.renderInfoRow(
                I18n.t("profile.validTill"),
                moment(subscription.validTill)
                  .locale("ru")
                  .format(DATE_FORMAT)
              )}
            {!!subscription.countInitial &&
              this.renderInfoRow(I18n.t("profile.numberOfVisitsAbbreviated"), subscription.countInitial)}
            {!!subscription.countLeft &&
              this.renderInfoRow(
                I18n.t("general.expired"),
                subscription.countLeft,
                subscription.countLeft > 0 ? "green" : "red"
              )}
            {!!subscription.additionalInfo
              ? this.renderInfoRow(
                  I18n.t("profile.additionalInformation"),
                  subscription.additionalInfo,
                  theme.colors.text
                )
              : null}
            {isAdminPreview && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.acceptMarkVisit(subscription.id)}
              >
                <CustomText text={I18n.t("profile.mark")} style={styles.buttonText} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
}
