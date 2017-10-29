/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import QuestionPages from './src/QuestionPages.js';
import ResultPage from './src/ResultPage.js';

class QuizBostonUniversity extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> Welcome to the BU QUIZ</Text>
        </View>
        <View>
          <Button
            title="Click here to start!"
            onPress={() => this.props.navigation.navigate('QuestionPage')}
            />
          </View>
      </View>
    );
  }
}

export const RootNavigator = StackNavigator({
  Home: {
    screen: QuizBostonUniversity,
  },
  QuestionPage: {
    screen: QuestionPages,
  },
  ResultPage: {
    screen: ResultPage,
  },
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE'

  },
});


export default RootNavigator
