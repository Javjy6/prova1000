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
          <Partit e1='Valencia CF' e2='Betis' r1='3' r2='2'></Partit>
          <Partit e1='Osasuna CF' e2='Oviedo' r1='2' r2='1'></Partit>
          <Partit e1='Real Madrid CF' e2='Barcelona CF' r1='1' r2='3'></Partit>
          <Partit e1='Rayo Vallecano' e2='Real Sociedad' r1='0' r2='1'></Partit>
          <Partit e1='Villareal' e2='Español' r1='4' r2='1'></Partit>
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