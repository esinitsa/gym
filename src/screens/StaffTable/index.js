import { Container, View } from "native-base";
import React from "react";
import { FlatList, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  getUsersByRole,
  makeAppointment
} from "../../components/personal/actions";
import StaffItem from "../common/staff";
import StaffHeader from "../common/staff/header";
import { renderHeader } from "./components/header";
import theme from "../../styles";
import styles from "./styles";

class StaffTable extends React.PureComponent {
  _keyExtractor = item => item.id;

  render() {
    return (
      <Container style={styles.container}>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <StaffHeader getUsersByRole={this.props.getUsersByRole} />
        <FlatList
          data={this.props.staff}
          keyExtractor={this._keyExtractor}
          renderItem={ staff => (
            <View style={styles.listItem}>
              <StaffItem
                user={this.props.userInfo}
                staff={staff.item}
                makeAppointment={this.props.makeAppointment}
                navigation={this.props.navigation}
              />
            </View>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userInfo: state.personal.user,
  personal: state.personal,
  staff: state.personal.usersByRole
});

const mapDispatchToProps = dispatch => ({
  makeAppointment: appointmentBody =>
    dispatch(makeAppointment(appointmentBody)),
  getUsersByRole: role => dispatch(getUsersByRole(role))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffTable);
