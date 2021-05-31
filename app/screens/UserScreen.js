import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserScreen(props) {
  const goToGallerie = () => {
    props.navigation.navigate("PostCo", { screen: "Gallerie" });
  };
  const logout = () => {
    props.navigation.navigate("Home");
  };
  const redirect = () => {
    props.navigation.navigate("ImgPicker");
  };
  const send = () => {
    props.navigation.navigate("Send");
  };
  const users = () => {
    props.navigation.navigate("Users");
  };
  const snaps = () => {
    props.navigation.navigate("Snaps");
  };
  const profil = () => {
    props.navigation.navigate("ProfilScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.myContainer}>
        <View style={styles.top}>
          <Pressable style={styles.iconAvatar} onPress={profil}>
            <Image
              style={styles.avatar}
              source={require("../assets/img/kissy.png")}
            />
          </Pressable>
          <View style={styles.iconLoupe}>
            <Image
              style={styles.loupe}
              source={require("../assets/img/loupe.png")}
            />
          </View>
          <View style={styles.iconAdd}>
            <Image
              style={styles.add}
              source={require("../assets/img/add-user.png")}
            />
          </View>
          <View style={styles.iconTurn}>
            <Image
              style={styles.turn}
              source={require("../assets/img/rotate.png")}
            />
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.centerTop}>
            <View style={styles.centerTopLeft}>
              <Button onPress={send} title="Send" />
              <Button onPress={users} title="Users" />
              <Button onPress={snaps} title="Snaps" />
            </View>

            <View style={styles.centerTopRight}></View>
          </View>

          <View style={styles.centerBottom}>
            <Pressable style={styles.cbGalleryContainer} onPress={goToGallerie}>
              <Image
                style={styles.cbGallery}
                source={require("../assets/img/gallery.png")}
              />
            </Pressable>
            <Pressable style={styles.cbCircleContainer} onPress={redirect}>
              <Image
                style={styles.cbCircle}
                source={require("../assets/img/circle.png")}
              />
            </Pressable>
            <Image
              style={styles.cbSmile}
              source={require("../assets/img/smile.png")}
            />
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
              source={require("../assets/img/photo.png")}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0c0c",
    flex: 1,
  },
  myContainer: {
    flex: 2,
  },

  top: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconAvatar: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(207, 207, 207, 0.1)",
    borderRadius: 50,
    position: "absolute",
    top: 7,
    left: 5,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  iconLoupe: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(207, 207, 207, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 7,
    left: 52,
  },
  loupe: {
    height: 22,
    width: 17,
  },
  iconAdd: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(207, 207, 207, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 7,
    right: 52,
  },
  add: {
    height: 17,
    width: 17,
  },
  iconTurn: {
    height: 35,
    width: 35,
    backgroundColor: "rgba(207, 207, 207, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 7,
    right: 5,
  },
  turn: {
    height: 22,
    width: 22,
  },

  center: {
    flex: 10,
  },
  centerTop: {
    flex: 8,
  },

  centerBottom: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  cbGalleryContainer: {
    height: 70,
    width: 70,
    marginTop: 27,
    marginRight: -23,
    marginLeft: -8,
  },
  cbGallery: {
    height: 30,
    width: 30,
  },
  cbCircleContainer: {
    height: 70,
    width: 70,
    marginTop: 5,
  },
  cbCircle: {
    height: 70,
    width: 70,
  },
  cbSmile: {
    height: 23,
    width: 23,
    marginTop: 32,
    marginLeft: 15,
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
