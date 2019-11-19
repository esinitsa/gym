import _ from "lodash";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { WebView } from "react-native-webview";
import { I18n } from "react-redux-i18n";
import { DEFAULT_COUNT, EMPTY_RESPONSE } from "../../../../constants";
import { BOX_NONE } from "../../../../constants/onBoardingStates";
import {
  getDateWithFormat,
  lastDateFromArray
} from "../../../../services/dateManager";
import { checkType, isActive } from "../../../../services/filter";
import { showToast } from "../../../../services/UIActions";
import theme from "../../../../styles";
import { CustomText } from "../../../common/text/customText";
import styles from "./styles";

export default class SubscriptionItem extends React.PureComponent {
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

  lastVisitDate = previouslyValidated => lastDateFromArray(previouslyValidated);

  checkDate = (subscription, prop) => {
    const date = _.get(subscription, prop);
    return date ? getDateWithFormat(date) : EMPTY_RESPONSE;
  };

  checkCountVisits = subscription =>
    _.get(subscription, "countInitial", DEFAULT_COUNT);

  renderSubscriptionType = (subscription, prop) => {
    const type = _.get(subscription, `${prop}`, EMPTY_RESPONSE);
    return (
      <View>
        {checkType(type) ? (
          <CustomText
            style={styles.subscriptionTypeView}
            text={this.checkCountVisits(subscription)}
          />
        ) : (
          <Octicons
            name={"calendar"}
            color="white"
            size={theme.size.icons.medium}
          />
        )}
      </View>
    );
  };

  checkSubscriptionType = (subscription, prop) => {
    const type = _.get(subscription, `${prop}`, EMPTY_RESPONSE);
    return checkType(type)
      ? this.checkCountActive(subscription)
      : this.checkTermActive(subscription);
  };

  checkCountActive = subscription => {
    return (
      <View>
        {isActive(subscription) ? (
          <View style={styles.activeView}>
            <CustomText
              style={styles.activeLabel}
              text={I18n.t("general.remainder")}
            />
            <CustomText
              style={styles.activeText}
              text={subscription.countLeft}
            />
          </View>
        ) : (
          <CustomText
            style={styles.inactiveText}
            text={I18n.t("general.inactive")}
          />
        )}
      </View>
    );
  };

  checkTermActive = subscription => {
    const endDate = this.checkDate(subscription, "validTill");
    return (
      <View>
        {isActive(subscription) ? (
          <View style={styles.activeView}>
            <CustomText
              style={styles.activeLabel}
              text={I18n.t("general.activeBy")}
            />
            <CustomText style={styles.activeText} text={endDate} />
          </View>
        ) : (
          <CustomText
            style={styles.inactiveText}
            text={I18n.t("general.expired")}
          />
        )}
      </View>
    );
  };

  handleExpand = () =>
    this.setState(state => ({ isExpanded: !state.isExpanded }));

  renderAdditionalInfoRow = (label, value, color) => {
    return (
      <View style={styles.infoView}>
        <View>
          <CustomText style={styles.infoViewLabelText} text={label} />
        </View>
        <WebView
          scalesPageToFit={false}
          useWebKit={false}
          style={styles.webview}
          source={{ html: value }}
        />
      </View>
    );
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
      <View pointerEvents={BOX_NONE} style={styles.container}>
        <View pointerEvents={BOX_NONE} style={styles.subscriptionInfoView}>
          <View style={styles.rowView}>
            <View style={styles.typeIcon}>
              {this.renderSubscriptionType(subscription, "subscriptionType")}
            </View>
            <View style={styles.textInfoView}>
              {this.checkSubscriptionType(subscription, "subscriptionType")}
              <View style={styles.lastVisitView}>
                <CustomText
                  style={styles.listText}
                  text={I18n.t("general.lastVisit")}
                />
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
            <View pointerEvents="none" style={styles.clickableArrow}>
              <TouchableOpacity>
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
                subscription.active
                  ? I18n.t("general.yes")
                  : I18n.t("general.no"),
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
                getDateWithFormat(subscription.startDate)
              )}
            {!!subscription.validTill &&
              this.renderInfoRow(
                I18n.t("profile.validTill"),
                getDateWithFormat(subscription.validTill)
              )}
            {!!subscription.countInitial &&
              this.renderInfoRow(
                I18n.t("profile.numberOfVisitsAbbreviated"),
                subscription.countInitial
              )}
            {!!subscription.countLeft &&
              this.renderInfoRow(
                I18n.t("general.remainder"),
                subscription.countLeft,
                subscription.countLeft > 0 ? "green" : "red"
              )}
            {!!subscription.additionalInfo
              ? this.renderAdditionalInfoRow(
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
                <CustomText
                  text={I18n.t("profile.mark")}
                  style={styles.buttonText}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
}
