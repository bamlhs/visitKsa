import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';

export default class DashBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

       <View style={styles.mainPageView}></View>
       <View style={styles.mainButtonsView}>

       </View>
      </View>
    );
  }
}
