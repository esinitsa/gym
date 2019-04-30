import ViewMoreText from "react-native-view-more-text";
import { CustomText } from "../text/customText";
import React from "react";
import { Text } from "native-base";

export default class ViewMoreCustomText extends React.PureComponent {
  renderViewMore(onPress) {
    return <Text style={{fontSize: 13, color: "#52a5ff"}} onPress={onPress}>подробнее</Text>;
  }

  renderViewLess(onPress) {
    return <Text style={{fontSize: 13, color: "#52a5ff"}} onPress={onPress}>скрыть</Text>;
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
