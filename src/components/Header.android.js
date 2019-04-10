import React, { Component } from 'react';

import { Text, View, StatusBar } from 'react-native';

import HeaderStyle from 'styles/HeaderStyle';

export default class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <Text style={HeaderStyle.header}>Restaurants</Text>
      </View>
    );
  }
}
