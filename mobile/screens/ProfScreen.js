import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { Avatar, Text, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import * as firebase from 'firebase';

const firebaseconfig = {
  apiKey: 'AIzaSyDAWfmP6uFmerCB5_vTPzGphV2fOESlOWE',
  authDomain: 'chatappauth-11ef5.firebaseapp.com',
  databaseURL: 'https://chatappauth-11ef5.firebaseio.com',
  projectId: 'chatappauth-11ef5',
  storageBucket: 'chatappauth-11ef5.appspot.com',
  messagingSenderId: '58950846337',
  appId: '1:58950846337:web:3c887e422417ee85fcca80',
  measurementId: 'G-XB8JG222Q0'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default function ProfScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = firebase.auth().currentUser;
  const [username, setUsername] = useState(user.displayName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [userName, setUserName] = useState('@' + user.displayName);
  const [Bio, setBio] = useState(user.providerData[0].bio);

  // useEffect(()=>{
  //   const user = firebase.auth().currentUser;

  // })
  return (
    <View>
      <ScrollView>
        <View>
          <LinearGradient
            colors={['#363A44', '#363A44', '#363A44']}
            style={style.contaienr}
          >
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                size='large'
                title={user.displayName.slice(0, 1)}
                rounded
                source={require('../assets/photo.jpeg')}
              />
              <Text style={style.text} h4>
                {username}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: '#1A50D8', padding: 10 }}>
            Account
          </Text>
          <View style={style.Container}>
            <TextInput
              //onPress={onPress}
              value={phoneNumber}
              onChangeText={val => setPhoneNumber(val)}
            />
            <Text style={{ paddingTop: 6 }}>Tap to change phone number</Text>
          </View>

          <View style={style.Container}>
            <TextInput
              //onPress={onPress}
              value={userName}
              onChangeText={val => setPhoneNumber(val)}
            />
            <Text style={{ paddingTop: 6 }}>Username</Text>
          </View>
          <View style={style.Container}>
            <TextInput
              //onPress={onPress}
              value={Bio}
              onChangeText={val => setPhoneNumber(val)}
            />
            <Text style={{ paddingTop: 6 }}>Add new words about yourself</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#E8DFDF' }}>
          <Text></Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: '#1A50D8', padding: 10 }}>
            Settings
          </Text>
          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='lock'
              type='font-awesome'
              size={25}
            />
            <Text style={{ paddingTop: 6, fontSize: 19 }}>
              Privacy and Security
            </Text>
          </View>

          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='globe'
              type='font-awesome'
              size={25}
            />
            <Text style={{ paddingTop: 6, fontSize: 19 }}>Language</Text>
          </View>
          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='comment'
              type='font-awesome'
              size={25}
            />
            <Text style={{ paddingTop: 6, fontSize: 19 }}>Chat Settings</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#E8DFDF' }}>
          <Text></Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: '#1A50D8', padding: 10 }}>
            Help
          </Text>
          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='comments'
              type='font-awesome'
              size={25}
            />
            <Text
              style={{ paddingTop: 6, fontSize: 19 }}
              onPress={() => navigation.navigate('Ask')}
            >
              Ask Question
            </Text>
          </View>

          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='question-circle'
              type='font-awesome'
              size={25}
            />

            <Text
              style={{ paddingTop: 6, fontSize: 19 }}
              onPress={() => navigation.navigate('Faq')}
            >
              FAQ
            </Text>
          </View>
          <View style={style.Container1}>
            <Icon
              style={{ padding: 6 }}
              reverseColor
              name='shield'
              type='font-awesome'
              size={25}
            />
            <Text
              style={{ paddingTop: 6, fontSize: 19 }}
              onPress={() => navigation.navigate('Privacy')}
            >
              Privacy Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  contaienr: {
    padding: 25,
    alignItems: 'flex-start'
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    padding: 10
  },
  Container: {
    fontSize: 17,
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 0.3,
    borderColor: 'lightgrey'
  },
  Container1: {
    flexDirection: 'row',
    fontSize: 17,
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 0.3,
    borderColor: 'lightgrey'
  }
});
