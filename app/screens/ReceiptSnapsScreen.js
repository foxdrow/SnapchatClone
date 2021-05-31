import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SnapsScreen (props){
  const [snaps, setSnaps] = useState();


  const recoverySnaps = async () => {
      const value = await AsyncStorage.getItem('token')

      const response = await fetch(
        "https://snapi-wac.herokuapp.com/snaps/", 
        {
          method: "GET",
          headers: {
              token: value
          }
        })
      const data = await response.json();
      return data;
  };

  useEffect(() => {
    console.log("component did mount");
    recoverySnaps().then((data) => {
      setSnaps(data.data);
    });
  }, []);

  const snapClick = (from, idSnap, duration) => {
    props.navigation.navigate("ViewSnap", {from: from, idsnap: idSnap, time: duration})
  };

  let snapsList;
  if (snaps) {
    snapsList = snaps.map((data) => {
    
      return (
        <View key={data.snap_id} style={styles.snapItem}>
          <Pressable onPress={ () => snapClick(data.from, data.snap_id, data.duration)}>
            <Text 
              key={data.snap_id} 
              style={styles.snapId}>
              {data.snap_id}
            </Text>
            <Text 
              key={data.from} 
              style={styles.snapFrom}>
              {data.from}
            </Text>
          </Pressable>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "#fff" }}>Snaps Screen</Text>
      <ScrollView style={styles.snapsContainer}>{snapsList}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f0f0f",
  },
  snapsContainer: {},
  snapItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#282828",
    paddingLeft: 50,
  },
  snapId: {
    color: "white",
  },
  snapFrom: {
    color: "white",
  },
});
