/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DashBoardScreen from './screens/DashBoardScreen';
import PlacesScreen from './screens/PlacesScreen';

export default class App extends Component {
  render() {
    return (
      <PlacesScreen />
    );
  }
}
