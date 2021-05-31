import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfilScreen(props) {
  const logout = () => {
    props.navigation.navigate("Home");
  };
  const user = () => {
    props.navigation.navigate("User");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={user}>
        <Image
          style={styles.downArrow}
          source={require("../assets/img/down-arrow.png")}
        />
      </Pressable>

      <Image
        style={styles.settings}
        source={require("../assets/img/settings.png")}
        onPress={() => this.props.navigation.navigate("Register")}
      />
      <View style={styles.alignCenter}>
        <View style={styles.imageProfil}>
          <Image
            style={styles.imageAvatar}
            source={require("../assets/img/kissy.png")}
          />
        </View>
        <Text>Name</Text>
        <Text>Name</Text>
      </View>

      <View style={styles.stories}>
        <View style={styles.storiesNav}>
          <Text style={styles.title}>Stories</Text>
          <View
            style={styles.newStory}
            onPress={() => this.props.navigation.navigate("Gallerie")}
          >
            <Text style={styles.newStoryText}>
              <Image
                style={styles.newStoryImg}
                source={require("../assets/img/add.png")}
              />
              Nouvelle Story
            </Text>
          </View>
        </View>

        <View style={styles.pCategory}>
          <Text style={styles.pCategoryText}>
            <Image
              style={styles.pCategoryImg}
              source={require("../assets/img/photo.png")}
            />
            Ajouter à ma Story
          </Text>
        </View>
      </View>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafcfd",
    paddingLeft: 15,
    paddingRight: 15,
  },
  downArrow: {
    height: 20,
    width: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  settings: {
    height: 20,
    width: 20,
    position: "absolute",
    right: 20,
    top: 10,
  },
  imageProfil: {
    height: 100,
    width: 100,
    backgroundColor: "#fffc14",
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "#000",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  imageAvatar: {
    height: 60,
    width: 60,
  },

  alignCenter: {
    alignItems: "center",
  },
  title: {
    color: "#17191c",
    fontSize: 16,
    fontWeight: "800",
  },

  storiesNav: {
    flexDirection: "row",
  },
  newStory: {
    width: 120,
    padding: 5,
    backgroundColor: "#edf0f2",
    borderRadius: 25,
    position: "absolute",
    right: 0,
    alignItems: "center",
  },
  newStoryText: {
    fontSize: 12,
    fontWeight: "500",
    paddingLeft: 5,
  },
  newStoryImg: {
    height: 11,
    width: 11,
  },

  pCategory: {
    backgroundColor: "#FFF",
    height: 50,
  },
  pCategoryImg: {
    height: 20,
    width: 20,
  },
});
