import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function  GallerieScreen(props) {
  const [imagePath, setImagePath] = useState('');

  const getImageGallerrie = async () => {
    const responsePerm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(responsePerm.granted == false){
      alert("access denied");
      return;
    }
    const photo = await ImagePicker.launchImageLibraryAsync();
    if (!photo.cancelled) {
      setImagePath(photo.uri);
      props.navigation.navigate('Send', {Uri : photo.uri})
    }
  }
  
    return (
      <View style={styles.container}>
        <Text>Gallerie screen</Text>
        <Button 
          onPress={getImageGallerrie} 
          title="Select an image" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
