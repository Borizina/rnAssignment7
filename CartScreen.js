import React, { useState } from 'eact';
import { View, Text, FlatList } from 'eact-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart')
     .then(cart => {
        setCart(JSON.parse(cart));
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter(item => item.id!== product.id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CartScreen;
