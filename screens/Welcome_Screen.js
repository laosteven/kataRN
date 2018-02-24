import React, { Component } from 'react';
import {
  View
} from 'react-native';
import NavigatorService from './../utils/navigator';
import { RkStyleSheet, RkButton } from 'react-native-ui-kitten';
import { loginStatusChanged, authStateChanged } from '../actions';
import { connect } from 'react-redux';

class Welcome_Screen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.props.authStateChanged();
  }

  changeIndex(index) {
    this.setState({ index })
  }

  render() {
    return (
      <View style={styles.screen}>
        <RkButton
          rkType='large'
          style={styles.button}
          onPress={() => {
            NavigatorService.reset('profile_screen');
          }}>GET STARTED</RkButton>
      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { loginStatus } = auth;
  return { loginStatus };
};

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 0,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
    marginBottom: 25
  }
}));

export default connect(mapStateToProps, {
  loginStatusChanged, authStateChanged
})(Welcome_Screen);