import React from "react";
import {
  View,
  Text,
  StyleSheet

 
} from "react-native";

export default function FAQ({ navigation }) {
 
  return (
      <View>
<Text style={styles.baseText}>
      <Text style={styles.titleText}>MangoTalk FAQ</Text>
      {"\n"}
      <Text style={styles.introduction}> What is MangoTalk?</Text>
      {"\n"}
      <Text style={styles.introduction}> Who is it for?</Text>
      {"\n"}
      <Text style={styles.introduction}> How is it different from Telegram?</Text>
      {"\n"}
      <Text style={styles.introduction}> How old is MangoTalk?</Text>
      {"\n"}
      <Text style={styles.introduction}> Is it available for any device?</Text>
      {"\n"}
  </Text>
      </View>
  
    )
};
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
      fontSize: 25,
      fontWeight: "bold",
      paddingTop:30
  }
  });