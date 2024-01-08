import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{ marginTop: 5 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k2hf2J5rbVVpb4Z1Gy4y9D0vWZHQnA1dW6GxHchAKtufJapZ_bJOkZ_ESB3nDoSvgFw&usqp=CAU",
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: "center", color: "magenta", fontSize: 20, fontWeight: "600" }}>
          QUIZ RULES
        </Text>

        <View style={{ 
          padding: 10, 
          backgroundColor: "#F88379", 
          borderRadius: 6, 
          marginTop: 15 
        }}>

          <View style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginVertical: 5 
          }}
          >
            <Text style={{ color: "white" }}>&#x2022;</Text>
            <Text 
              style={{ 
                marginLeft: 4, 
                color: "#722F37", 
                fontSize: 14, 
                fontWeight: "500" 
              }}>For each correct answer you get 5 points</Text>
          </View>

          <View style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginVertical: 5 
          }}
          >
            <Text style={{ color: "white" }}>&#x2022;</Text>
            <Text 
              style={{ 
                marginLeft: 4, 
                color: "#722F37", 
                fontSize: 14, 
                fontWeight: "500" 
              }}>There is no negative marking for wrong answers</Text>
          </View>

          <View style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginVertical: 5 
          }}
          >
            <Text style={{ color: "white" }}>&#x2022;</Text>
            <Text 
              style={{ 
                marginLeft: 4, 
                color: "#722F37", 
                fontSize: 14, 
                fontWeight: "500" 
              }}>Each question has a time limit of 15 seconds</Text>
          </View>

          <View style={{ 
            flexDirection: "row", 
            alignItems: "center",
            marginVertical: 5 
          }}
          >
            <Text style={{ color: "white" }}>&#x2022;</Text>
            <Text 
              style={{ 
                marginLeft: 4, 
                color: "#722F37", 
                fontSize: 14, 
                fontWeight: "500" 
              }}>You should answer all the questions compulsarily</Text>
          </View>





          </View>
        </View>

        <Pressable style={{
          backgroundColor: "magenta", 
          padding: 14,
          width: 120, 
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30 
        }}>
          <Text style={{
            color: "white",
            fontWeight: "600",
            textAlign: "center"
          }}>Start Quiz</Text>
        </Pressable>

      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})