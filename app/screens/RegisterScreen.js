import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import TextI from "../components/TextInput";

const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verif = (text) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    if (regex.test(text) === false) {
      return false;
    } else {
      setEmail(text);
      return true;
    }
  };

  const submit = () => {
    if (verif(email) && password != "") {
      fetchRegister().then((register) => {
        if (register.data["email"] === email) {
          console.warn("Compte cree");
          props.navigation.navigate("Home");
        } else {
          console.warn(register.data["email"][0]);
        }
      });
    } else {
      if (password != "") {
        console.warn("Error Email");
      } else {
        console.warn("Error Password");
      }
    }
  };

  const fetchRegister = async () => {
    const dataSend = {
      email,
      password,
    };
    const response = await fetch(
      "https://snapi-wac.herokuapp.com/inscription/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      }
    );
    const register = await response.json();
    return register;
  };

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextI
          name="Email"
          placeholder="Email"
          setName={setEmail}
          label="User Email"
        ></TextI>
        <TextI
          name="Password"
          placeholder="Password"
          label="Password"
          secureTextEntry={true}
          setName={setPassword}
        ></TextI>
      </View>
      <View style={styles.formButton}>
        <Button title="Sign in" color="#FFF" onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  InputContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  formButton: {
    backgroundColor: "#0dadff",
    borderRadius: 25,
    marginTop: 80,
    paddingVertical: 5,
    paddingHorizontal: "12%"
  }
});

export default RegisterForm;
