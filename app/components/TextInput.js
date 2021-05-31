import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextI = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{props.label}</Text>
      <TextInput
        style={styles.TextI}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(text) => props.setName(text)}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  Text: {
    color: '#9a9fa7',
    fontSize: 13,
    fontWeight: "600"
  },
  TextI: {
    borderColor: "black",
    borderBottomWidth: 1,
    minWidth: "60%",
    minHeight: 37,
    borderBottomWidth: 2,
    borderBottomColor: "#ced4da",
  },
});

export default TextI;
