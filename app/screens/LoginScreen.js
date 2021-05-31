import React, { useState, useEffect } from "react";
import TextI from "../components/TextInput";
import { View, StyleSheet, Button, Text, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { log } from "react-native-reanimated";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  
  const storeData = async (value) => {
    try {
      
      await AsyncStorage.setItem('token', value)
      console.log("deux")
    } catch (e) {
      // saving error
    }
  }

  const saveToken = async (log) => {
    const tok = log.data.token
    await storeData(tok)
    return await AsyncStorage.getItem('token')
  }

  const submit = async () => {
    addUser().then((log) => {
      if (log.data.email == email) {
        console.warn("Connection");
        saveToken(log).then((res)=> console.log(res))
        props.navigation.navigate('PostCo', {screen : "User"});
      } else {
        console.warn(log.data);
      }
    });
  };

  const addUser = async () => {
    const dataSend = {
      email,
      password,
    };
    const response = await fetch(
      "https://snapi-wac.herokuapp.com/connection/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      }
    );
    const data = await response.json();
    return data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextI
          name="Email"
          placeholder="Email"
          setName={setEmail}
          label="Email User"
        ></TextI>
        <TextI
          name="Password"
          placeholder="Password"
          secureTextEntry={true}
          setName={setPassword}
          label="Password"
        ></TextI>
      </View>
      <Text style={styles.forgetMdp}>Forget Password ?</Text>
      <View style={styles.formButton}>
        <Button title="Log in" color="#FFF" onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  InputContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  forgetMdp: {
    color: "#007aff",
    alignSelf: "center",
    marginTop: 15,
    fontWeight: "500",
    fontSize: 13,
  },
  formButton: {
    backgroundColor: "#0dadff",
    borderRadius: 25,
    marginTop: 80,
    paddingVertical: 5,
    paddingHorizontal: "12%"
  }
});

export default Login;
