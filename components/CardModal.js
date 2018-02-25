import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import {
  RkTextInput,
  RkButton,
  RkStyleSheet
} from 'react-native-ui-kitten';
import { updateCard } from '../actions';
import { connect } from 'react-redux';


class CardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Number: '4242424242424242',
      Exp_Month: '02',
      Exp_Day: '21',
      CVC: '999',
    }
  }
  render() {
    const { Number, Exp_Month, Exp_Day, CVC } = this.state
    return (
      <Modal isVisible={this.props.payment_modal}>
        <View style={styles.modalContent}>
          <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5, marginBottom: 25 }}>
            <View style={styles.row}>
              <RkTextInput label='Number'
                value={Number}
                onChangeText={(text) => this.setState({ Number: text })}
                rkType='right clear' />
            </View>
            <View style={styles.row}>
              <RkTextInput label='Exp Month'
                value={Exp_Month}
                onChangeText={(text) => this.setState({ Exp_Month: text })}
                rkType='right clear'
              />
            </View>
            <View style={styles.row}>
              <RkTextInput label='Exp Day'
                value={Exp_Day}
                onChangeText={(text) => this.setState({ Exp_Day: text })}
                rkType='right clear'
              />
            </View>
            <View style={styles.row}>
              <RkTextInput label='CVC'
                value={CVC}
                onChangeText={(text) => this.setState({ CVC: text })}
                rkType='right clear'
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <RkButton
              onPress={() => {
                this.props.updateCard(this.state);
                this.props._closeModal()
              }}
              rkType='medium'
            >Update</RkButton>
            <RkButton
              onPress={() => { this.props._closeModal() }}
              rkType='medium'
            >Close</RkButton>
          </View>
        </View>
      </Modal>
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
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

const mapStateToProps = ({ settings }) => {
  const { card } = settings;
  return { card };
};

export default connect(mapStateToProps, { updateCard })(CardModal);