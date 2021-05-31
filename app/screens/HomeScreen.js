import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";

export default function HomeScreen(props) {
  const goToGallerie = () => {
    console.warn("ici");
    props.navigation.navigate("PostCo", { screen: "Gallerie" });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.flex1}>
        <Image
          style={styles.homeImg}
          source={require("../assets/img/snapchat.png")}
        />
      </View>
      <View style={styles.flex2}></View>

      <View tyle={styles.flex2}>
        <Pressable
          style={styles.homeRegis}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.textButton}>Register</Text>
        </Pressable>
      </View>
      <View style={styles.flex3}>
        <Pressable
          style={styles.homeLogin}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffc00",
    justifyContent: "flex-end",
  },
  flex1: {
    alignItems: "center",
    justifyContent: "center",
  },
  flex2: {
    alignItems: "stretch",
  },
  flex3: {
    alignItems: "stretch",
  },

  homeImg: {
    height: 125,
    width: 125,
    marginBottom: "55%",
  },

  homeLogin: {
    backgroundColor: "#f23c57",
    padding: 30,
    alignItems: "center",
  },
  homeRegis: {
    backgroundColor: "#0eadff",
    padding: 30,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
