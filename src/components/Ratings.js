import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    fontSize: 10,
  },
};
export default class Ratings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.rating}>4.9</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star" color="#FCA307" style={styles.star} />
          <Icon name="star" color="#FCA307" style={styles.star} />
          <Icon name="star" color="#FCA307" style={styles.star} />
          <Icon name="star" color="#FCA307" style={styles.star} />
          <Icon name="star" color="#FCA307" style={styles.star} />
        </View>
      </View>
    );
  }
}
