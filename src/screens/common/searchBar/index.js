import React from "react";
import { Input, Icon, View, Item } from "native-base";
import styles from "./styles";
import theme from "../../../styles";
import { I18n } from "react-redux-i18n";

export default class SearchBar extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Item style={styles.item}>
          <Icon name="ios-search" style={styles.icon} />
          <Input
            style={styles.searchInput}
            placeholder={I18n.t("general.search")}
            placeholderTextColor={theme.colors.inputColor}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.props.handleInput}
          />
        </Item>
      </View>
    );
  }
}
