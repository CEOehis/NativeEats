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
import axios from 'axios';
import Header from 'components/Header';
import RestaurantCard from 'components/RestaurantCard';
import { API_KEY } from '../../env.config';

export default class RestaurantList extends Component {
  state = {
    count: 0,
    restaurants: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972',
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then(res =>
        this.setState({
          count: res.data.total,
          restaurants: res.data.businesses,
        })
      );
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
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item, index }) => <RestaurantCard restaurant={item} />}
          keyExtractor={item => item.id}
          initialNumToRender={5}
        />
      </View>
    );
  }
}
