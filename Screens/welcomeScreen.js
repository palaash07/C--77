import * as React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase'
import db from '../Config'
import SantaAnimation from '../Components/santa';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID: '',
            password: '',
        }

    }
    userSignUp = (emailID,password) => {
 firebase.auth().createUserWithEmailAndPassword(emailID,password)
 .then(response => {
   return Alert.alert('User added succesfully')
 })
 .catch(error => {
   var errorCode = error.code
   var errorMessage = error.message
   return Alert.alert(errorMessage)
 })
    }
    userLogin = (emailID,password) => {
firebase.auth().signInWithEmailAndPassword(emailID,password)
.then(response => {
  return Alert.alert('Signed in Succesfully')
})
.catch(error => {
  var errorCode = error.code
  var errorMessage = error.message
  return Alert.alert(errorMessage)
})
    }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.profileContainer}>
          <SantaAnimation/>
          <Text style = {styles.title}>Book Santa</Text>
           </View>
        <TextInput
        style = {styles.inputBox}
        placeholder = {'enter email ID' }
        keyboardType = {'email-address'}

        placeholder = {'enter password'}
        keyboardType = {'email-address'}
        onChangeText = {(text )=> {
            this.setState({
                emailID : text
            })
        }}
        />
        <TextInput
        style = {styles.inputBox}

        placeholder = {'enter password' }
        secureTextEntry = {true}

        onChangeText = {(text )=> {
            this.setState({
                password : text
            })
        }}
        />
        <TouchableOpacity
        style = {styles.button}
        onPress = {() => {
          this.userLogin(this.state.emailID,this.state.password)
        }}
        >
<Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {styles.button}
        onPress = {() => {
          this.userSignUp(this.state.emailID,this.state.password)
        }}
        >
          <Text style = {styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const style = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'orange'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   title:{
     fontSize:65,
     fontWeight:'bold',
     paddingBottom:30,
     color:'red'
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:'red'
   },
   imputBox:{
width:300,
height:40,
justifyContent:'center',
borderColor:'black',
fontSize:20,
margin:10,
paddingLeft:10
   },
   buttonText:{
     color:'white',
     fontWeight:'bold',
     fontSize:20
   }
})
