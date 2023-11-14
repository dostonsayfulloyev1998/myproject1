import {View, SafeAreaView, Text,Button} from "react-native";


const Comments = ({route,navigation})=>{

    let id = route.params.id

    return (
       <SafeAreaView style={{flex:1}}>
           <Button title={'back'} onPress={()=>{navigation.goBack()}}/>
           <View style={{flex:1}}>
               <Text> salom {id} </Text>
           </View>
       </SafeAreaView>
    )

}

export default Comments
