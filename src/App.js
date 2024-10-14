import React from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {PaperProvider, Text, TextInput } from "react-native-paper";

const dades = ["Email", "Nom"];

const textAMostrar = () => {
  return(
    <Text style={estils.titol}>Hola mundo</Text>
  )
}

const dadesImput = () => {
  const [text, setText] = React.useState("");
  return (
    dades.map((nombre, index) => (
      <TextInput key={index.toString()}
      label={nombre}
      value={text}
      onChangeText={text => setText(text)}
    />
    ))
  )
};

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <PaperProvider>
      {textAMostrar()}
      {dadesImput()}
    </PaperProvider>
  );
}

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descripcio: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  imatge: {
    width: 200,
    height: 200,
  }
});

export default App;