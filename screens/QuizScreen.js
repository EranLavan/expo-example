import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import questions from '../data/questions'
import { useNavigation } from '@react-navigation/native'

const QuizScreen = () => {

  const navigation = useNavigation();
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

// useEffect 1: Selected Answer Index

useEffect(() => {
  if(selectedAnswerIndex !== null) {
    if(selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
      setPoints((points) => points + 10);
      setAnswerStatus(true);
      answers.push({
        question: index + 1, 
        answer: true})
    } else {
      setAnswerStatus(false);
      answers.push({
        question: index + 1, 
        answer: false})
    }
  }
}, [selectedAnswerIndex]);

// useEffect 2: Current Question

useEffect(() => {
  setSelectedAnswerIndex(null);
  setAnswerStatus(null);
}, [currentQuestion])

// useEffect 3: 

useEffect(() => {
  const myInterval = () => {
    if (counter >= 1) {
      setCounter((counter) => counter - 1);
    }
    if (counter === 0) {
      setIndex(index + 1);
      setCounter(15);
    }

    interval = setTimeout(myInterval, 1000);

    //clean up 

    return () => {
      clearTimeout(interval);
    }
  }
}, [counter])

// useEffect 4: Navigation

useEffect(() => {
  if(index + 1 > data.length) {
    navigation.navigate("Results", {
      answers: answers,
      points: points,
    })
  }
}, [currentQuestion])

// useEffect 5: Index

useEffect(() => {
  if(!interval) {
    setCounter(15);
  }
}, [index])


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
          {currentQuestion?.options.map((item, index) => (
            <Pressable 
            onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
            // onPress={() => console.warn("pressed an option")}
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