import { View, Text,ImageBackground ,TextInput, StyleSheet, SafeAreaView} from 'react-native'
import React, {useState}from 'react'
import one from '../../assets/1.jpg'
const Home = () => {
const [city, setCity] = useState("")


  return (
    <ImageBackground source={one} style={styles.image}>
      <SafeAreaView style={{flex:1}}> 
    <View style={styles.TextinputContainer}>
    <TextInput
    style={styles.TextInput}
    value={city}
    placeholder="اكتب مدينتك"
    onChangeText={(text)=>setCity(text)}
    />

    </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default Home

const styles=StyleSheet.create({
    image:{
        flex: 1
    },
    TextinputContainer:{
backgroundColor:"rgba(255,255,255,0.7)",
//alignItems:"center",
borderRadius:10,
paddingHorizontal:10,
alignSelf:"center",
width:"60%"
    },
    TextInput:{
height:40,
//width:'60%',
fontWeight:"600"

    }
})