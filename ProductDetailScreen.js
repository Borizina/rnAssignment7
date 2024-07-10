import React from 'eact';
import { View, Text } from 'eact-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
