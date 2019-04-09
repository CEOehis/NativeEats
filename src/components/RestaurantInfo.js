import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import Ratings from 'components/Ratings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleIcon from 'react-native-vector-icons/FontAwesome';

const cardStyles = StyleSheet.create({
  description: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  location: {
    fontWeight: '400',
    color: '#CCC',
    marginBottom: 5,
  },
  distance: {
    borderRadius: 2,
    backgroundColor: '#FCA307',
    padding: 5,
  },
});

export default class RestaurantInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      headerLeft: (
        <Icon
          name="arrow-left"
          style={{
            color: '#FFF',
            fontSize: 20,
            paddingLeft: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3.84,
            elevation: 3,
          }}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: (
        <Icon
          name="heart"
          style={{
            color: '#FFF',
            fontSize: 20,
            paddingRight: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3.84,
            elevation: 3,
          }}
        />
      ),
      headerStyle: {},
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold',
      },
    };
  };
  state = {};
  render() {
    const restaurant = this.props.navigation.getParam('restaurant');
    const { id, name, categories, image_url, distance, rating } = restaurant;
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.height * 0.4);
    const imageWidth = dimensions.width;
    return (
      <View>
        <Image
          source={{ uri: image_url }}
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 2,
            borderBottomColor: '#eee',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: image_url }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={cardStyles.description}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={cardStyles.name}>{name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Ratings rating={rating} />
                <SimpleIcon
                  name="circle"
                  style={{
                    fontSize: 4,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                />
                <Text style={cardStyles.location}>
                  {categories.length ? categories[0].alias : ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={cardStyles.distance}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 10,
              }}
            >
              {`${(distance / 1000).toFixed(2)} km`}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
