import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native'
import {useRoute} from "@react-navigation/native";
import {useEffect,useState} from 'react'

const HomeScreen = ({navigation})=>{

    const [users,setUser]= useState([])
    const [isLoading,setLoading] = useState(true)

    const loadData =  ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>{
                setUser(data)
                setLoading(false)
            })
            .catch(e=>console.error(e))
    }

    useEffect(() => {
         loadData()
    }, []);

    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",aligncontent:"center"}}>

            { isLoading && <Text> Loading ... </Text>
            }

            { !isLoading &&  <ScrollView>
                {
                    users.map(user=>{
                        return(
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'grey',padding:10,borderRadius:10,
                            marginTop:5}} >
                                <Text>{user.id} {user.name}, {user.username} </Text>
                                <Button title={'btn'} onPress={()=>{ navigation.navigate('SettingsScreen',{id:user.id}) }}/>
                            </View>
                        )
                    })
                }
            </ScrollView>}
        </SafeAreaView>
    )
}

//
// const styles = StyleSheet.create({
//    //  item:{
//    //     flex:1,
//    //     justifyContent: 'center',
//    //     width:"100%",
//    //     backgroundColor:"red",
//    //     padding:10,
//    //     borderRadius:10
//    // }
// })


export default HomeScreen;
