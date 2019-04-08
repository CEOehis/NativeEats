import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = ({ rating, style }) => {
  const stars = [];

  for (let i = 0; i < Math.ceil(rating); i++) {
    const name = Math.floor(rating) > i ? 'star' : 'star-half';
    stars.push(<Icon key={i} name={name} color="#FCA307" style={style} />);
  }
  return <View style={{ flexDirection: 'row' }}>{stars}</View>;
};

export default Stars;
