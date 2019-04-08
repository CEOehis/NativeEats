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
    page: 0,
    loading: false,
  };

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    const offset = this.state.page * 50;
    this.setState({
      loading: true,
    });
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972&limit=50&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then(res => {
        this.setState({
          count: res.data.total,
          restaurants: [...this.state.restaurants, ...res.data.businesses],
          loading: false,
        });
      });
  };

  loadMoreRestaurants = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.getRestaurants();
      }
    );
  };

  render() {
    const { loading, restaurants, page } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Header />
        {loading && page === 0 ? (
          <Text>...Loading</Text>
        ) : (
          <FlatList
            data={restaurants}
            renderItem={({ item, index }) => (
              <RestaurantCard restaurant={item} />
            )}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            onEndReached={this.loadMoreRestaurants}
            onEndReachedThreshold={50}
          />
        )}
      </View>
    );
  }
}
