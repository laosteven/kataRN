import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { UtilStyles } from '../style/styles';

export default class QrScan_Screen extends Component {
  static navigationOptions = {
    title: 'Station Scan'
  };

  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  _handlePress = () => {
    this.props.navigation.navigate("main_screen");
  };
}

const styles = StyleSheet.create({
  componentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  caption: {
    marginLeft: 16
  }
});