import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native'
import {useRoute} from "@react-navigation/native";
import {useEffect,useState} from 'react'

const SettingsScreen = ({route,navigation})=>{

    const [posts,setPosts]= useState([])
    const [isLoading,setLoading] = useState(true)

    let id = route.params.id

    const loadData =  ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(data=>{
                setPosts(data)
                setLoading(false)
            })
            .catch(e=>console.error(e))
    }

    useEffect(() => {
        loadData()

    }, []);

    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",aligncontent:"center"}}>
            <Button title={'back'} onPress={()=>navigation.goBack()}/>
            <Button title={'push'} onPress={()=>navigation.push('SettingsScreen')}/>
            { isLoading && <Text> Loading ... </Text>
            }

            { !isLoading &&  <ScrollView>
                {
                    posts.map(post=>{
                        if(post.userId===id)
                        return(
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green',padding:20,borderRadius:10,
                                marginTop:5}} >
                                <Text> {post.id},{post.title},{post.userId} </Text>
                                <Button title={'btn'} onPress={()=> navigation.navigate('Comments',{id:post.id}) }/>

                            </View>
                        )
                    })
                }
            </ScrollView>}
        </SafeAreaView>
    )
}

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


export default SettingsScreen;
