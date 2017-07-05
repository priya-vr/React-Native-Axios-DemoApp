import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

//Components
//import Style from './utils/styles.js';
var axios = require('axios');
export default class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     people: {},

   }
 }



  render(){
    return(
      <View style={styles.contentView}>
        <View style={styles.userNameContainer}>
          <TextInput
            style= {styles.textInput}
            placeholder = "userName"
            placeholderTextColor='#021355'
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style = {styles.textInput}
            placeholder = "Password"
            placeholderTextColor='#021355'
          />
        </View>
        <View style= {styles.loginButtonContainer}>
          <Button style={styles.loginButton}
            title="Login"
            color="#021355"
            onPress={() =>this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}


const styles= StyleSheet.create({
  contentView:{
    height:"100%",
    width:"100%",
    backgroundColor:'#021355',
  },
  userNameContainer:{
    height:40,
    marginTop:200,
    marginHorizontal:20,
    backgroundColor:'#FFFFFF',
  },
  passwordContainer:{
    height:40,
    marginTop:20,
    marginHorizontal:20,
    backgroundColor:'#FFFFFF',
  },
  textInput:{
    height:40,
    padding:10,
    color: '#021355',
  },
  loginButtonContainer:{
    height:40,
    marginTop:50,
    marginHorizontal:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#A35D3B',
    borderRadius: 5,
  },
  loginButton:{
    width:"100%",
    height:"100%",
  },
});
