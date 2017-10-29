import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

const questions = ['Is Citgo a fuel company?','Did the Boston Red Sox win the World Series in 2013?','Is this building a BU Building?','Is this hockey team better than the BU one?']
const images = ['https://i.imgur.com/25qj1yx.jpg', 'https://i.imgur.com/JSKxx4R.jpg', 'https://i.imgur.com/xOdIv99.jpg', 'https://i.imgur.com/4quhAH6.png']
const correctAnswers = ['Yes', 'Yes', 'Yes', 'No']
var answers = ['','','','']

class QuestionPages extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
  };
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImageQuestion}>
          <Text style={styles.textDescription}>
            { questions[this.state.counter] }
          </Text>
          <Image
            style = {styles.imagesSlide}
            source={{ uri: images[this.state.counter]}}
            resizeMode='contain'
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title='Yes'
            color='green'
            onPress={() => this.answerFunc('Yes')}
          />
          <Button
            title='No'
            color='red'
            onPress = {() => this.answerFunc('No')}
          />
        </View>
      </View>
    )
  }
  answerFunc(userAnswer) {

    answers[this.state.counter] = userAnswer
    var aux = this.state.counter
    aux++
    this.setState({
      counter: this.state.counter + 1
    })
    //use setstate to update what you pass in to it

    if (aux > 3) {
      this.navigateToResult()
    }
  }

  navigateToResult() {
    this.props.navigation.navigate('Result',
    {
      correctAnswers: correctAnswers,
      answers: answers
    })
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1
  },
  containerImageQuestion: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDescription: {
    fontSize: 22
  },
  imagesSlide: {
    width: 200,
    height: 200,
  },
  buttonsContainer: {
    flex: 0.4,
    flexDirection: 'row'
  }
})
export default QuestionPages
