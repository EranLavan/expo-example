import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import questions from '../data/questions'

const QuizScreen = () => {

  const data = questions;
  //points
  const [points, setPoints] = useState(0);

  //index of the question
  const [index, setIndex] = useState(0);

  //answer status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  //answers
  const [answers, setAnswers] = useState([]);

  //selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //Counter
  const [counter, setCounter] = useState(15);

  //interval

let interval = null;

  const currentQuestion = data[index];
  console.log(currentQuestion);

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
        marginTop: 30,
        padding: 10,
        borderRadius: 6,
      }}>
        <Text style={{
          fontSize: 18, 
          fontWeight: "bold"
        }}>{currentQuestion?.question}</Text>

        <View style={{marginTop: 12}}>
          {currentQuestion?.options.map((item, i) => (
            <Pressable 
            onPress={() => console.warn("pressed on the option")}
            style={{
              flexDirection: "row", 
              alignItems: "center",
              borderWidth: 0.5,
              borderColor: "#00FFFF",
              marginVertical: 10,
              borderRadius: 20
            
            }}>
              <Text style={{
                borderColor: "#00FFFF", 
                textAlign: "center",
                borderWidth: 0.5, 
                width: 40, 
                height: 40, 
                borderRadius: 20,
                padding: 10,
                borderRadius: 20}}>{item.options}</Text>

              <Text style={{
                marginLeft: 10
              }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>

      </View>
    </SafeAreaView>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})