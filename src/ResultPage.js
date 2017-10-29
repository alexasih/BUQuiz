import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button, ListView } from 'react-native';

class ResultPage extends Component {

  render() {
    return (
      <View>
        <View>
          <Text>
            {'Results'}
          </Text>
        </View>
      <View>
        <Text>
          {'Well done! \n You got ' + this.answerAlgorithm() + ' right answers out of ' + this.props.navigation.state.params.answers.length + ' questions!'}
        </Text>
      </View>
    </View>
    )
  }

  answerAlgorithm() {
    var goodAnswers = 0

    //zip comparison, if 2 in array are the same, we increment good answers by 1

    for (var i =0; i < this.props.navigation.state.params.answers.length;i++) {
      if(this.props.navigation.state.params.answers[i] == this.props.navigation.state.params.correctAnswers[i]) {
        goodAnswers++
      }
    }

    return goodAnswers
  }
}

export default ResultPage
