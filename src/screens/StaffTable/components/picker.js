import { Picker } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import theme from "../../../styles";
import { I18n } from "react-redux-i18n";
import styles from "../styles";
import { STAFF_ROLES, ROLES } from "../../../constants/userTypes";

class StaffPicker extends React.PureComponent {
  state = {
    selected: 0
  };

  onValueChange = value => {
    this.setState({
      selected: value
    }, () => this.props.getUsersByRole(STAFF_ROLES[this.state.selected]));
  };

  componentDidMount() {
    this.props.getUsersByRole(STAFF_ROLES[this.state.selected]);
  }

  render() {
    return (
        <Picker
          note
          mode="dropdown"
          style={styles.pickerView}
          textStyle={styles.pickerText}
          selectedValue={this.state.selected}
          itemTextStyle={styles.pickerItemText}
          headerTitleStyle={styles.bodyHeaderText}
          headerBackButtonTextStyle={styles.pickerBackHeader}
          iosIcon={
            <Icon
              name={"down"}
              color={theme.colors.primary}
              solid
              style={styles.dropDownArrow}
            />
          }
          onValueChange={this.onValueChange}
        >
          {STAFF_ROLES.map((item, index) => (
            <Picker.Item
              label={I18n.t(`${ROLES[item]}`)}
              value={index}
              key={`${item}${index}`}
            />
          ))}
        </Picker>
    );
  }
}

export default StaffPicker;
