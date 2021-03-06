import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';

import { connect } from 'react-redux';

import {
  RkButton,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import { facebookSignin, facebookSignup } from './../../actions';


class FbSignInUpButton extends Component {

  _pressSignInUp() {
    if (this.props.emailPwdBtnStr == 'SignIn') {
      this.props.facebookSignin();
    } else {
      const { email, phone, firstname, lastname } = this.props;
      this.props.facebookSignup({ email, phone, firstname, lastname });
    }
  }

  render() {

    return (
      <View style={styles.buttons}>

        <RkButton
          onPress={() => { this._pressSignInUp(); }}
          rkType='large rounded'
          style={styles.fb}
        >
          {this.props.fbBtnStr}
        </RkButton>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, phone, firstname, lastname, loginStatus, } = auth;
  return { email, phone, firstname, lastname, loginStatus, };
};


let styles = RkStyleSheet.create(theme => ({
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  fb: {
    flex: 4,
    marginLeft: 10,
    marginVertical: 1,
    height: 56
  }
}));

export default connect(mapStateToProps, {
  facebookSignin, facebookSignup
})(FbSignInUpButton);
