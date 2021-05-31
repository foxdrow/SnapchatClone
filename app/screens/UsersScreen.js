import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsersScreen = (props) => {
  const [users, setUsers] = useState();

  const recoveryUsers = async () => {
    const value = await AsyncStorage.getItem('token')
    console.error(value, "token")
    const response = await fetch("https://snapi-wac.herokuapp.com/all/", {
      method: "GET",
      headers: {
        token: value,
      },
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("component did mount");
    recoveryUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const send = (value) => {
    console.log(value)
    props.navigation.navigate("Send", {params : value})
  }

  //console.log(users);
  let usersList;
  if (users) {
    usersList = users.map((data) => {
        return <Button 
                key={data.email}
                onPress={() => send(data.email)}
                title={data.email} 
                style={styles.userItem}
            />
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Users Screen</Text>
      <ScrollView style={styles.usersContainer}>
        {usersList}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  usersContainer: {

  },
  userItem: {
    margin: 10,
  },
});

export default UsersScreen;
