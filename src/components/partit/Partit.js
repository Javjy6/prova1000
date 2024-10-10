import React from 'react';
import{
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Partit= (props) => {
    return(
        <view>
            <Text style={estils.textosEquipo}> {props.e1} - {props.e2}</Text>
            <Text style={estils.textosResultado}> {props.r1} - {props.r2}</Text>
        </view>
    );
};

const estils = StyleSheet.create({
    textosEquipo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textosResultado: {
        fontSize: 24,
        color: 'blue',
        textAlign: 'center',
    },
    tarjeta: {
        backgroundColor: 'yellow',
        borderWidth: 3,
        borderBlockColor: 'black',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    }
})
export default Partit;