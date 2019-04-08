import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Header from 'components/Header';
import RestaurantCard from 'components/RestaurantCard';

export default class RestaurantList extends Component {
  state = {};

  componentDidMount() {
    // fetch restaurants
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Header />
        <RestaurantCard />
      </View>
    );
  }
}
