import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView

 
} from "react-native";


export default function PrivacyPolicy({ navigation }) {
        const titleText = useState("MangoTalk Privacy Policy");
        const introduction = useState("1.Introduction")
        const par = useState("This Privacy sets out how we, MangoTalk and protect your personal data that you provide us, It will be based on cloud messaging services.");
        const privacy_principle_title = useState(" 1.1 Privacy Principles");
        const par2= useState("Mangotalk has two fundamental principles when it comes to collecting and processing private date");
        const lis = useState("1. We don't use your data to show ads");
        const lis2 = useState("2. We only store data that mangotalk needs to function as a secure and high quality messenger application");
        const terms_service = useState("1.2 Terms of Service");
        const par3 = useState("You can read all the terms of service in the website below https:wwww.mangotalk.com");
        const basic_account = useState("3.1 Basic Account Data");
        const par4 = useState("MangoTalk is a communication service. You provide your mobile number and basic data account( which may include profile name, profile pictures and about information to create MangoTalk account");
        const email_address = useState("3.2 Your Email  Address");
        const par5 = useState("When you enable two step verification for your account, you can use your recovery email so it can be only use to send your recovery password");
 return (<ScrollView>
<Text style={styles.baseText}>
    <Text style={styles.titleText} >
      {titleText}
      {"\n"}
      {"\n"}
    </Text>
    <Text style={styles.introduction}>
{introduction}
{"\n"}
{"\n"}
    </Text>
    <Text style={styles.par} numberOfLines={5}>{par}</Text>
  {"\n"}
  {"\n"}
  <Text style={styles.privacy_principle_title}>{privacy_principle_title}</Text>
  {"\n"}
  {"\n"}
  <Text style={styles.par}>{par2}</Text>
  {"\n"}
  {"\n"}
  <Text style={styles.par}>{lis}</Text>
  {"\n"}
  
  <Text style={styles.par}>{lis2}</Text>
  {"\n"}{"\n"}
  <Text style={styles.introduction}> {terms_service}</Text>
  {"\n"}{"\n"}
  <Text style={styles.par}> {par3}</Text>
  {"\n"}{"\n"}
  
  <Text style={styles.introduction}> {basic_account}</Text>
  
  {"\n"}{"\n"}
  <Text style={styles.par}>{par4}</Text>
  {"\n"}
  {"\n"}
  <Text style={styles.introduction}> {email_address}</Text>
  {"\n"}
  
  <Text style={styles.par}>{par5}</Text>
  {"\n"}{"\n"}
  <Text style={styles.introduction}>3.3 Cloud Messages</Text>
  {"\n"}
  {"\n"}
  <Text style={styles.par}> MangoTalk is cloud service. We store messages,photos,videos and documents from your local chats abd store it on our servers so then you can access any data from your device any time that you want</Text>
  </Text>
 
 </ScrollView>
  
);
};

const styles = StyleSheet.create({
baseText: {
  fontFamily: "Cochin"
},
titleText: {
  fontSize: 20,
  fontWeight: "bold",
  textAlign:"center",
  paddingTop:30
},
introduction:
{
    fontSize: 20,
    fontWeight: "bold"
},
par:{
    fontSize:20,
    padding:10
},
privacy_principle_title:{
    fontWeight:"bold",
    fontSize:20
}
});