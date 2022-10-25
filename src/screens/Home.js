import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import one from "../../assets/1.jpg";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
const Home = () => {
  const [city, setCity] = useState("");
const [weather,setWeather] = useState({});
  const getwather = async () => {
    if(!city.trim())return
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=face9031726d5f0fa2bea87549fa4303`
      )
      setWeather(response.data)
    } catch (error) {
      alert("تاكد من اسم المدينة")
    }
  };

  return (
    <ImageBackground source={one} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.TextinputContainer}>
          <TextInput
            style={styles.TextInput}
            value={city}
            placeholder="اكتب مدينتك"
            onChangeText={(text) => setCity(text)}
          />
          <Entypo onPress={getwather} name="check" size={24} color="black" />
        </View>

        {Object.keys(weather).length > 0 ?
        <> 
        <View style={styles.locationContenar}>
        <Text style={styles.location}>
         {weather?.name}, {weather?.sys?.country}
         </Text>
         </View>
 
         <View style={styles.weatherContenar}>
         <Text style={styles.temp}>
          {Math.round(weather.main.temp)} °C
          </Text>
          <Text style={styles.weather1}>{weather.weather[0].main}</Text>
          </View>
          </>
        : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  TextinputContainer: {
    backgroundColor: "rgba(255,255,255,0.7)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
    width: "60%",
    justifyContent: "space-between",
  },
  TextInput: {
    height: 40,
    //width:'60%',
    fontWeight: "600",
  },
  locationContenar: {
    marginVertical:15,
  },
  location:{
color:"white",
fontSize:35,
fontWeight:"500",
textAlign: "center",
textShadowColor:"rgba(0,0,0,0.55)",
textShadowOffset:{width:-1,height:1},
textShadowRadius:10,
  },
  weatherContenar: {
alignItems: "center",

  },
  temp:{
    color:"white",
    fontSize:100,
    fontWeight:"800",
    textAlign: "center",
    backgroundColor:"rgba(255,255,255,0.2)",
    paddingVertical:20,
    paddingHorizontal:30,
    borderRadius:30,
    //overflow:"hidden",
    marginTop:10,
    textShadowColor:"rgba(0,0,0,0.75)",
    textShadowOffset:{width:-3,height:3},
    textShadowRadius:10,
  },
  weather1:{
    color:"white",
    fontSize:50,
    fontWeight:"700",
    // shadowColor:"#000000",
    // shadowOffset:{width:-3,height:3},
    // shadowOpacity:1,
  },
});
