import React from "react";
import { Text } from "native-base";
import { CustomText } from "../text/customText";
import ViewMoreText from "react-native-view-more-text";
import { I18n } from "react-redux-i18n";
import styles from "./styles";

export default class ViewMoreCustomText extends React.PureComponent {
  renderViewMore(onPress) {
    return <Text style={styles.viewMoreText} onPress={onPress}>{I18n.t("general.more")}</Text>;
  }

  renderViewLess(onPress) {
    return <Text style={styles.viewMoreText} onPress={onPress}>{I18n.t("general.hint")}</Text>;
  }

  render() {
    const { text, style } = this.props;
    return (
      <ViewMoreText
        numberOfLines={2}
        renderViewMore={this.renderViewMore}
        renderViewLess={this.renderViewLess}
      >
        <CustomText text={text} style={style} />
      </ViewMoreText>
    );
  }
}
