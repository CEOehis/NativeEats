import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from 'react-native';
import axios from 'axios';
import SimpleIcon from 'react-native-vector-icons/FontAwesome5';
import Header from 'components/Header';
import RestaurantCard from 'components/RestaurantCard';
import { API_KEY } from '../../env.config';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FCA307',
  },
});
export default class RestaurantList extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    count: 0,
    restaurants: [],
    page: 0,
    loading: false,
    search: '',
    error: '',
  };

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    const offset = this.state.page * 50;
    this.setState({
      loading: true,
      error: '',
    });
    const term = this.state.search;
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=37.786882&longitude=-122.399972&limit=50&offset=${offset}`,
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
      })
      .catch(error => {
        this.setState({
          loading: false,
          error:
            'Unable to fetch Restaurants at this time. Check your internet connection and try again',
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

  handleSearch = () => {
    this.setState(
      {
        restaurants: [],
      },
      () => {
        this.getRestaurants();
      }
    );
  };

  focusSearchInput = () => {
    this.searchInput.focus();
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
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search e.g 'food', 'spice'"
            onSubmitEditing={this.handleSearch}
            ref={input => {
              this.searchInput = input;
            }}
            onChangeText={text => {
              this.setState({
                search: text,
              });
            }}
            value={this.state.search}
          />
          <TouchableHighlight
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={this.focusSearchInput}
          >
            <SimpleIcon
              name="search"
              style={{
                fontSize: 20,
                color: '#fff',
              }}
            />
          </TouchableHighlight>
        </View>
        {loading && page === 0 ? (
          <ActivityIndicator
            size="large"
            color="#0066CC"
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          />
        ) : (
          <FlatList
            data={restaurants}
            ListEmptyComponent={() => (
              <View
                style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {this.state.error
                    ? this.state.error
                    : 'No restaurants found!'}
                </Text>
              </View>
            )}
            renderItem={({ item, index }) => (
              <RestaurantCard
                restaurant={item}
                navigation={this.props.navigation}
              />
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
