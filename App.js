import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Image } from 'react-native';

export default function App() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  return (
    <ImageBackground source={require("./assets/f1Login4.jpg")}  style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Username..." value={username} onChangeText={text => setUsername(text)} />
          <TextInput style={styles.input} placeholder="Passwort..." value={password} onChangeText={text => setPassword(text)} />
          <Button title="Sign in" onPress={() => alert("You tapped me!")}></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: 250,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 5
  },
  input: {
    padding: 7.5,
    borderRadius: 2.5,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.35)",
    color: "#000"
  }
});
