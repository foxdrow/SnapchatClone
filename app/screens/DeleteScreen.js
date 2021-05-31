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

export default function DeleteScreen(props) {

    const fetchDelete = async () => {
        const idSnap = props.route.params.id;
 
        
        const token = await AsyncStorage.getItem('token')

        const response = await fetch(
          "https://snapi-wac.herokuapp.com/seen/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token" : token
            },
            body : JSON.stringify(idSnap)
          }
        );
        // const image = await response.json();
        // return image
      };
        fetchDelete()
        props.navigation.navigate("Snaps")
      return (
        <View style={styles.container}>
            <Text>
               Snap Deleted
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
