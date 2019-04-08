import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import SimpleIcon from 'react-native-vector-icons/FontAwesome5';
import Ratings from 'components/Ratings';

const cardStyles = StyleSheet.create({
  card: {
    margin: 15,
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imageContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  name: {
    fontWeight: '400',
    marginBottom: 5,
  },
  location: {
    fontWeight: '400',
    color: '#CCC',
    marginBottom: 5,
  },
  absoluteInfoLeft: {
    position: 'absolute',
    borderRadius: 5,
    left: 15,
    top: 10,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
  },
  absoluteInfoRight: {
    position: 'absolute',
    borderRadius: 5,
    right: 15,
    top: 10,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
  },
});

export default class RestaurantRow extends Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 9) / 20);
    const imageWidth = dimensions.width;
    return (
      <View style={cardStyles.card}>
        <View style={cardStyles.imageContainer}>
          <View style={cardStyles.absoluteInfoLeft}>
            <Text
              style={{
                color: '#FFF',
                fontWeight: '700',
              }}
            >
              1.6km
            </Text>
          </View>
          <View style={cardStyles.absoluteInfoRight}>
            <SimpleIcon
              name="heart"
              style={{
                color: '#FFF',
                fontWeight: '700',
              }}
            />
          </View>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=450&fit=crop&ixid=eyJhcHBfaWQiOjF9 ',
            }}
            style={{
              width: imageWidth - 20,
              height: imageHeight,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={cardStyles.description}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={cardStyles.name}>That One Pizza Place</Text>
            <Text style={cardStyles.location}>ITALIAN</Text>
          </View>
          <Ratings />
        </View>
      </View>
    );
  }
}
