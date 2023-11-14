import React from "react";
import {View,Text} from "react-native";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
    return (
       <NativeBaseProvider>
            <Text>salom dunyo</Text>
       </NativeBaseProvider>
    );
}