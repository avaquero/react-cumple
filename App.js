import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, StatusBar, View, Button } from "react-native";
import Auth from "./src/components/Auth";
import ListBirthday from "./src/components/ListBirthday";
import firebase from "./src/utils/firebase";
import "firebase/auth";

export default function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    })
  }, []);

  if (user === undefined) return null;


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListBirthday /> : <Auth />}
      </SafeAreaView>
    </>
  )
}



const styles = StyleSheet.create({

  background: {
    backgroundColor: "#15212b",
    height: "100%"
  }

})