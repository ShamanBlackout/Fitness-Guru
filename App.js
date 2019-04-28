/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Image,Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




export default class Welcome extends Component {

render(){
	return(
		<View style={styles.container}>
		<Image source={require('./images/welcome.png')} style={styles.image}/>
		</View>


		);
}
}

AppRegistry.registerComponent('FitnessGuru', () => Welcome);


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
  	flex:1,
 	width: undefined,
 	height: undefined,
 	resizeMode: 'contain',
  },
});
