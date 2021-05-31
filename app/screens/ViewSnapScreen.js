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

export default function ViewSnap(props) {
    const [snap, setSnap] = useState("")
    const duration = props.route.params.time
    const idSnap = props.route.params.idsnap;
    const fetchImage = async () => {
        const token = await AsyncStorage.getItem('token')

        const response = await fetch(
          "https://snapi-wac.herokuapp.com/snap/"+idSnap,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token" : token
            },
          }
        );
        const image = await response.json();
        return(image)
      };
      fetchImage().then((data) => {
        setSnap(data)
      })

      useEffect(() => {
        const interval = setInterval(() => {
          const duration = props.route.params.time
          props.navigation.navigate("delete", {params: idSnap})
          console.log(duration+'seconde!');
        }, duration*1000);
        return () => clearInterval(interval);
      }, []);
      
      return (
        <View style={styles.container}>
            <Text>
               {snap.data}
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