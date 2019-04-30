import _ from "lodash";
import moment from "moment";
import React from "react";
import { TouchableOpacity, View, Alert} from "react-native";
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

export default class SubscriptionListItem extends React.PureComponent {
  state = {
    isExpanded: false
  };


  acceptMarkVisit = subscriptionId => {
    const performMarkVisit = () => {
      this.props.markUserVisit(subscriptionId).then( res =>  showToast("Посещение отмечено"));
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
      ? moment(_.last(previouslyValidated)).locale("ru").format(DATE_FORMAT)
      : EMPTY_RESPONSE;

  checkDate = (subscription, prop) => {
    const date = _.get(subscription, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return moment(date).locale("ru").format(DATE_FORMAT);
    }
  };


  checkCountVisits = subscription => _.get(subscription, "countInitial", DEFAULT_COUNT);


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
          <Octicons name={"calendar"} color="white" size={35} />
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText
              style={{ ...styles.listText, color: "grey", fontWeight: "bold" }}
              text={"Остаток"}
            />
            <CustomText
              style={{ ...styles.listText, color: "green", fontWeight: "bold" }}
              text={subscription.countLeft}
            />
          </View>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText
              style={{ ...styles.listText, color: "grey", fontWeight: "bold" }}
              text={"Активен по:"}
            />
            <CustomText
              style={{ ...styles.listText, color: "green", fontWeight: "bold" }}
              text={endDate}
            />
          </View>
        ) : (
          <CustomText style={styles.inactiveText} text={"Истек"} />
        )}
      </View>
    );
  };


  handleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  renderInfoRow = (label, value, color) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5
        }}
      >
        <View>
          <CustomText
            style={{ fontWeight: "bold", color: "grey" }}
            text={label}
          />
        </View>
        <View>
          <CustomText
            style={{ fontWeight: "bold", color: color ? color : "#007bff" }}
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
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={styles.typeIcon}>
              {this.renderSubscriptionType(subscription, "subscriptionType")}
            </View>
            <View style={{
                  paddingLeft: 11,}}>
              {this.checkSubscriptionType(subscription, "subscriptionType")}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomText
                  style={{
                    ...styles.listText,
                    color: "#C0C0C0",
                    fontWeight: "400"
                  }}
                  text={"Последний визит:"}
                />
                <CustomText
                  style={{
                    ...styles.listText,
                    color: "#C0C0C0",
                    fontWeight: "400"
                  }}
                  text={`${this.lastVisitDate(
                    _.get(subscription, "previouslyValidated", EMPTY_RESPONSE)
                  )}`}
                />
              </View>
            </View>
          </View>
          {withExtension && (
            <View
              style={{
                alignContent: "center",
                alignItems: "flex-end",
                alignSelf: "center"
              }}
            >
              <TouchableOpacity onPress={this.handleExpand}>
                <Icon
                  name={isExpanded ? "up" : "down"}
                  color="#007bff"
                  size={25}
                  solid
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {withExtension && isExpanded && (
          <View style={{ marginTop: 10 }}>
            {!!subscription.active &&
              this.renderInfoRow(
                "Активен",
                subscription.active ? "Да" : "Нет",
                subscription.active ? "green" : "red"
              )}
            {!!subscription.subscriptionType &&
              this.renderInfoRow(
                "Тип",
                subscription.subscriptionType === "TERM"
                  ? "Период"
                  : "Количество посещений"
              )}
            {!!subscription.startDate &&
              this.renderInfoRow(
                "Дата начала",
                moment(subscription.startDate).locale("ru").format(DATE_FORMAT)
              )}
            {!!subscription.validTill &&
              this.renderInfoRow(
                "Дата окончания",
                moment(subscription.validTill).locale("ru").format(DATE_FORMAT)
              )}
            {!!subscription.countInitial &&
              this.renderInfoRow("Кол-во посещений", subscription.countInitial)}
            {!!subscription.countLeft &&
              this.renderInfoRow(
                "Остаток",
                subscription.countLeft,
                subscription.countLeft > 0 ? "green" : "red"
              )}
            {!!subscription.additionalInfo
              ? this.renderInfoRow(
                  "Доп. информация",
                  subscription.additionalInfo,
                  "black"
                )
              : null}
            { isAdminPreview && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.acceptMarkVisit(subscription.id)}
              >
                <CustomText text={"Отметить"} style={styles.buttonText}/>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
}
