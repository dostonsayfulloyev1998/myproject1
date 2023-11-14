
import {View,StyleSheet,Text} from "react-native";

const Task = (props) =>{

    return(
        <View style={styles.box}>
            <Text style={styles.text}> {props.text} </Text>
        </View>
    );
}

const  styles = StyleSheet.create({
    container: {
        flex:1
    },
    box:{
        backgroundColor:"#fff",
        margin:10,
        borderRadius:10,
        padding:20
    }
})

export default Task