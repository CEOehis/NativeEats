import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from 'components/Stars';

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#FCA307',
    fontSize: 12,
    marginRight: 5,
  },
  star: {
    fontSize: 8,
    paddingRight: 5,
  },
};
export default class Ratings extends Component {
  render() {
    const { rating } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.rating}>{rating}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Stars rating={rating} style={styles.star} />
        </View>
      </View>
    );
  }
}
