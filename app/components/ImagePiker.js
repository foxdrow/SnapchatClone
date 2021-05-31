import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Alert,
  Image,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();
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
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.uri);
    console.log(image);
    const asset = await MediaLibrary.createAssetAsync(image.uri);
    MediaLibrary.createAlbumAsync("test", asset);
  };

  const users = () => {
    props.navigation.navigate("Users");
  };
  const redirect = () => {
    props.navigation.navigate("User");
  };

  return (
    <View style={styles.container}>
      <View style={styles.myContainer}>
        <View style={styles.imagePreview}>
          {!pickedImage ? (
            <Text style={styles.textNoPreview}>Aucune image</Text>
          ) : (
            <Image source={{ uri: pickedImage }} style={styles.image} />
          )}
        </View>

        <View style={styles.buttonPhotoContainer}>
          <Pressable onPress={takeImageHandler}>
            <Image
              style={styles.buttonPhoto}
              source={require("../assets/img/camera.png")}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.bottomIconContainer}>
          <Image
            style={styles.bottomIcon}
            source={require("../assets/img/geo.png")}
          />
        </Pressable>
        <Pressable style={styles.bottomIconContainer} onPress={users}>
          <Image
            style={styles.bottomIcon}
            source={require("../assets/img/chat.png")}
          />
        </Pressable>
        <Pressable style={styles.bottomIconContainer} onPress={redirect}>
          <Image
            style={styles.bottomIcon}
            source={require("../assets/img/circle-rond.png")}
          />
        </Pressable>
        <Pressable style={styles.bottomIconContainer}>
          <Image
            style={styles.bottomIcon}
            source={require("../assets/img/group.png")}
          />
        </Pressable>
        <Pressable style={styles.bottomIconContainer}>
          <Image
            style={styles.bottomIcon}
            source={require("../assets/img/play-button.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "stretch",
    flexDirection: "column",
    flex: 1,
  },
  myContainer: {
    backgroundColor: "#0c0c0c",
    flex: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePreview: {
    flex: 12,
    justifyContent: "center",
  },
  textNoPreview: {
    color: "#8b8b8b",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonPhotoContainer: {
    flex: 2,
  },
  buttonPhoto: {
    height: 65,
    width: 65,
    marginTop: 20,
  },
  bottom: {
    backgroundColor: "#000",
    flex: 1.1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomIconContainer: {
    height: 27,
    width: 27,
    marginTop: 12,
  },
  bottomIcon: {
    height: 27,
    width: 27,
  },
});

export default ImgPicker;
