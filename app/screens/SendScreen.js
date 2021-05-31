import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

export default function SendScreen(props) {
    const [duration, setDuration] = useState("")
    const send = () => {
        fetchSend().then((data) => {
            console.log(data) 
        });
    };
    
    const fetchSend = async () => {
        const to = props.route.params.params;
        const value = await AsyncStorage.getItem('token')
        const recImage = await AsyncStorage.getItem('image')
        const image = recImage != null ? JSON.parse(recImage) : null;
        console.log(duration)
        const test = {
            "to" : to,
            "duration" : duration,
            "image" : image
        }
        console.log(test)
        
        const response = await fetch(
            "https://snapi-wac.herokuapp.com/snap/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": value
                },
                body: JSON.stringify(test),
            }
        )

        const data = await response.json();
        return data;
    };


// ------------------- ACCESS GALLERIE ------------------------ //

    const [imagePath, setImagePath] = useState('');

    const getImageGallerrie = async () => {
      const responsePerm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if(responsePerm.granted == false){
        alert("access denied");
        return;
      }
      const photo = await ImagePicker.launchImageLibraryAsync();
      const jsonImage = JSON.stringify(photo)
      await AsyncStorage.setItem('image', jsonImage)
      if (!photo.cancelled) {
        setImagePath(photo.uri);
        props.navigation.navigate("UsersScreen", {Photo: photo})
      }
    }

// ------------------- ACCESS CAMERA ------------------------ //

    const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);

    if (result.status !== "granted") {
        Alert.alert(
        "Insufficient Permissions !",
        "You need to grant camera permission to use this app",
        [{ text: "Okay" }]
        );
        return false;
    }
    return true;
    };
    const takeImageHandler = async () => {
      const hasPermissions = await verifyPermissions();
      if (!hasPermissions) {
          return;
      }
      const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5,
      });
      const jsonImage = JSON.stringify(image)
      await AsyncStorage.setItem('image', jsonImage)
      
      setImagePath(image);
      const asset = await MediaLibrary.createAssetAsync(image.uri);
      MediaLibrary.createAlbumAsync("test", asset);
      props.navigation.navigate("UsersScreen", {Photo: image})
    };



// ------------------- SCREEN ------------------------ //


    return (
    <View style={styles.container}>
        <View style={styles.imagePreview}>
          {!imagePath.uri ? (
            <Text>No picked Image</Text>
          ) : (
            <Image source={{ uri: imagePath.uri }} style={styles.image} />
          )}
        </View>
        <Button title="Take Picture" onPress={takeImageHandler}></Button>
        <Text>Send Page</Text>
        <StatusBar style="auto" />
        <Button 
            onPress={getImageGallerrie} 
            title="Select an image" />
        <TextInput
            keyboardType = 'numeric'
            onChangeText ={setDuration}
        />
        <Button 
            title="Send"
            onPress={send}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    imagePicker: {
      alignItems: "center",
      marginBottom: 15,
    },
    imagePreview: {
      width: "100%",
      height: 400,
      justifyContent: "center",
      marginBottom: 10,
      alignItems: "center",
      borderColor: "#ccc",
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: "100%",
    },
});
