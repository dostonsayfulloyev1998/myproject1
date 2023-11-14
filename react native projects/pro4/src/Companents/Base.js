import React from "react";
import {Text,View,StyleSheet} from "react-native";

export default function App({text}) {
    return (
       <View style={styles.container}>
              <Text style={{fontSize:22,color:"white"}}> {text} </Text>
       </View>
    );
}


const styles =  {
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        height:"auto",
        borderRadius:10,
        backgroundColor:"#44bfe8",
        padding:10,
        margin:10,
    }
}