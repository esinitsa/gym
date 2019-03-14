import React from "react";
import { View, Card, CardItem, Text } from "native-base";
import styles from "./styles";

export default class ProfileCards extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {user !== null ? user.email : "EmailTest"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {user !== null ? user.firstName : "firstName"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {user !== null ? user.lastName : "lastName"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {user !== null ? user.locale : "locale"}
            </Text>
          </CardItem>
        </Card>
        <View style={styles.cardRow}>
          <Card style={styles.leftCard}>
            <Text style={styles.startDateText}>
              {user !== null ? "START DATE" : "Дата начала"}
            </Text>
            <Text style={styles.dateText}>
              {user !== null && user.subscriptions !== null
                ? new Date(user.subscriptions[0].startDate).toLocaleDateString(
                    "en-US"
                  )
                : ""}
            </Text>
          </Card>
          <Card style={styles.rightCard}>
            <Text style={styles.visitsAmountText}>
              {user !== null && user.subscriptions !== null
                ? user.subscriptions[0].subscriptionType
                : "Количество занятий"}
            </Text>
            <Text style={styles.visitsNumber}>
              {user !== null && user.subscriptions !== null
                ? user.subscriptions[0].countInitial
                : "0"}
            </Text>
          </Card>
        </View>
      </View>
    );
  }
}
