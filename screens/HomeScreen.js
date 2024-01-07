import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{marginTop: 15}}>
      <Image
       style={{height: 370, width: "100%", resizeMode: "contain"}}
       source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k2hf2J5rbVVpb4Z1Gy4y9D0vWZHQnA1dW6GxHchAKtufJapZ_bJOkZ_ESB3nDoSvgFw&usqp=CAU",
       }}
       />
      <View style={{padding: 10}}>
        <Text style={{textAlign: "center", color: "magenta", fontSize: 17, fontWeight: "600"}}>
          QUIZ RULES
        </Text>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})