import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Partit from './src/components/partit/Partit';

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <View>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text style={estils.titol}> Resultats Lliga 24-25 </Text>
          <Image style={estils.imatge} source={require('./src/assets/img/images.jpg')}></Image>
          <Partit e1='Raimon' e2='Royal Academy' r1='1' r2='10'></Partit>
          <Partit e1='Raimon' e2='Occult' r1='2' r2='1'></Partit>
          <Partit e1='Raimon' e2='Wild' r1='1' r2='0'></Partit>
          <Partit e1='Raimon' e2='Brain' r1='2' r2='1'></Partit>
          <Partit e1='Raimon' e2='Royal Academy' r1='3' r2='2'></Partit>
        </View>
      </ScrollView>
    </View>
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