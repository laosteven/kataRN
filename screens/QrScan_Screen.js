import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { UtilStyles } from '../style/styles';
import NavigatorService from './../utils/navigator';  
import {  } from '../actions'; 

export default class QrScan_Screen extends Component {
  static navigationOptions = {
    title: 'Station Scan'
  };

  constructor(props) { 
    super(props);  
    this.scanSuccess = false; 
  } 

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
    if(this.scanSuccess) return; 
 
    var arr = data.split(",");  
    let first = this.props.firstname; 
    alert(`Welcome to ${arr[1]}, ${first}`); 
    NavigatorService.reset("main_screen"); 
    this.scanSuccess = true; 
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

const mapStateToProps = ({ auth }) => { 
  const { firstname } = auth; 
  return { firstname }; 
}; 
 
// export default connect(mapStateToProps, { 
//   emailResetChanged, resetUser, errorSet 
// })(QrScan_Screen); 
