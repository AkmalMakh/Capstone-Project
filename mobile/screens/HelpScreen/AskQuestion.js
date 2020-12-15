import React from "react";
import {
  View,
  Text,
  StyleSheet

 
} from "react-native";

export default function AskQuestion({ navigation }) {
 const email  = "akmal.makhmudov57@gmail.com";
  return (
      
    <View style={{padding: 10}}>
     
    <Text style={styles.titleText}> Ask a Question</Text>
   
    <Text style={styles.introduction}> Please note that MangoTalk Support is done by volunteers. We try to respond as quickly as possible, but it might take a while!</Text>
    <Text style={styles.introduction}>Please email to {email}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign:"center",
    paddingTop:30
  },
  introduction:
  {
      fontSize: 15,
      fontWeight: "bold",
      paddingTop:30
  }
  });