import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GallerieScreen from "./screens/GalleriePhotoScreen";
import UserScreen from "./screens/UserScreen";
import SendScreen from "./screens/SendScreen";
import UsersScreen from "./screens/UsersScreen";
import SnapsScreen from "./screens/ReceiptSnapsScreen";
import ViewSnap from "./screens/ViewSnapScreen";
import DeleteScreen from "./screens/DeleteScreen";
import ProfilScreen from "./screens/ProfilScreen";
import ImgPicker from "./components/ImagePiker";
const Stack = createStackNavigator();

export default function PostCo(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Gallerie" component={GallerieScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Send" component={SendScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Snaps" component={SnapsScreen} />
      <Stack.Screen name="ViewSnap" component={ViewSnap} />
      <Stack.Screen name="delete" component={DeleteScreen} />
      <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
      <Stack.Screen name="ImgPicker" component={ImgPicker} />
    </Stack.Navigator>
  );
}
