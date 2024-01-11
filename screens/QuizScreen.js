import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import questions from '../data/questions'

const QuizScreen = () => {

  const data = questions;
  const currentQuestion = data[0];
  console.log(currentQuestion)

  return (
    <SafeAreaView>
      <View style={{
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        padding: 10}}>
        <Text>Quiz Challenge</Text>
        <Text>Timer</Text>
      </View>

      <View style={{
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginHorizontal: 10}}>
        <Text>Your progress</Text>
        <Text>0/5 questions answered</Text>
      </View>

      {/* Progress Bar */}

      <View style={{
        backgroundColor: "#F0F8FF",
        marginTop: 10,
        padding: 10,
        borderRadius: 6,
      }}>
        <Text style={{
          fontSize: 18, 
          fontWeight: "bold"
        }}>{currentQuestion?.question}</Text>

        <View style={{marginTop: 12}}>
          {currentQuestion?.options.map((item, i) => (
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{
                borderColor: "#00FFFF", 
                textAlign: "center", 
                width: 40, 
                height: 40, 
                borderRadius: 20,
                padding: 10,
                borderRadius: 20}}>{item.options}</Text>

              <Text>{item.answer}</Text>
            </View>
          ))}
        </View>

      </View>
    </SafeAreaView>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})