import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const Product = ({ product }) => {
  return (
    <View>
      <Image
        source={{
          uri: product.reference.image ? product.reference.image.thumb : null
        }}
      />
      <Text>{product.name}</Text>
    </View>
  );
};

export default Product;
