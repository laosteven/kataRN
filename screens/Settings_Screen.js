import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
  RkButton
} from 'react-native-ui-kitten';

import { logoutUser, userDetailsFetch } from '../actions';

import LoadingSpinner from './../components/Loading/LoadingSpinner';



// FontAwesome.cog

class Settings_Screen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: "", lastname: "", email: "", phone: ""
    }
  }

  componentWillMount() {
    if (this.props.userdetails) {
      let { firstname, lastname, email, phone } = this.props.userdetails;
      this.setState({ firstname, lastname, email, phone });
    }
  }

  render() {
    const { firstname, lastname, email, phone } = this.state
    return (
      <ScrollView style={styles.root}>
        {/* <RkAvoidKeyboard> */}
        <LoadingSpinner />
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='header6 primary'>INFO</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput label='First Name'
              value={firstname}
              rkType='right clear'
              onChangeText={(text) => this.setState({ firstName: text })} />
          </View>
          <View style={styles.row}>
            <RkTextInput label='Last Name'
              value={lastname}
              onChangeText={(text) => this.setState({ lastName: text })}
              rkType='right clear' />
          </View>
          <View style={styles.row}>
            <RkTextInput label='Email'
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
              rkType='right clear' />
          </View>
          <View style={styles.row}>
            <RkTextInput label='Phone'
              value={phone}
              onChangeText={(text) => this.setState({ phone: text })}
              rkType='right clear' />
          </View>
        </View>
        {/* </RkAvoidKeyboard> */}
        <RkButton
          rkType='xlarge rounded'
          style={styles.button}
          onPress={() => this.props.logoutUser()}
        >Sign Out
        </RkButton>
      </ScrollView >
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingTop: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }
}));

const mapStateToProps = (state) => {
  return { userdetails: state.auth };
};

export default connect(mapStateToProps, {
  logoutUser
})(Settings_Screen);