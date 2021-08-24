import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
    const type = props.type;
    const backgroundColor = type === 'primary' ? 'black':'white'
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => {
          console.warn("hey there")
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
