import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-navigation-stack';
import { Avatar, Text, Icon, Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import * as firebase from 'firebase';
// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup

MainProfileScreen.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('name')
});
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
// var database = firebase.database();

export default function MainProfileScreen({ navigation }) {
  //   const dispatch = useDispatch();
  //   const selfUser = useSelector(state => state.selfUser);
  //   const conversations = useSelector(state => state.conversations);
  //   const userId = navigation.getParam("userId");
  //   const messages = conversations[userId].messages;

  const [image, setImage] = useState(null);
  const [username, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // Object {
  //   "apiKey": "AIzaSyDAWfmP6uFmerCB5_vTPzGphV2fOESlOWE",
  //   "appName": "[DEFAULT]",
  //   "authDomain": "chatappauth-11ef5.firebaseapp.com",
  //   "createdAt": "1607898726575",
  //   "displayName": null,
  //   "email": null,
  //   "emailVerified": false,
  //   "isAnonymous": false,
  //   "lastLoginAt": "1607901330886",
  //   "phoneNumber": "+821084124460",
  //   "photoURL": null,
  //   "providerData": Array [
  //     Object {
  //       "displayName": null,
  //       "email": null,
  //       "phoneNumber": "+821084124460",
  //       "photoURL": null,
  //       "providerId": "phone",
  //       "uid": "+821084124460",
  //     },
  //   ],
  //   "redirectEventId": null,
  //   "stsTokenManager": Object {
  //     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5NmFhNzRjODFiZTYwYjI5NDg1NWE5YTVlZTliODY5OGUyYWJlYzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hhdGFwcGF1dGgtMTFlZjUiLCJhdWQiOiJjaGF0YXBwYXV0aC0xMWVmNSIsImF1dGhfdGltZSI6MTYwNzkwMTMzMSwidXNlcl9pZCI6InNqcFVYb2NJMXBXajE2OEpqTTFxMEdZQVNhbjIiLCJzdWIiOiJzanBVWG9jSTFwV2oxNjhKak0xcTBHWUFTYW4yIiwiaWF0IjoxNjA3OTAxMzMxLCJleHAiOjE2MDc5MDQ5MzEsInBob25lX251bWJlciI6Iis4MjEwODQxMjQ0NjAiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4MjEwODQxMjQ0NjAiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.RXWKwMd_XCKHtsJ7b7MJu0v7jMAvWsDVyZtWVj1Lz0dh1tyN79z_UYAC3chKy9AKlTvjAjKlWqf9QmI0tCCrmsLxWix--nkNxaTFfpwQR391zWSvG-OBiZkYkZOvDc-0vezCuH3Jy8ggHpoVIjT6z99Upvvmtf5bLX4vkV4rS8k0PwsWMPOekjxZTpmOHvMk5JWR6P-phMRajL6Xp9py6-ikbSCKjmbU9EMGTJnkgBNueXcE9DlEOAeaSfHgodvRuQ90DWuJ6nRHEbAujw8DPMMyaSr8qxwe-E6HYgUIv1TL4McGXk7Y8_87zkW0Vkk-U5qIUgY7gz1QqiZiZIWjXQ",
  //     "apiKey": "AIzaSyDAWfmP6uFmerCB5_vTPzGphV2fOESlOWE",
  //     "expirationTime": 1607904931344,
  //     "refreshToken": "AG8BCndljCBb7H97qOLLnUYF9gDPQqggS14kJ-qmcGxMVErfoS0t8B7wmhNJtXU8blnYNirqnlKh5K9A043VEql6tjeO7XQMbL_AbuKpWAi4T4piEi8ylue8yfBx43i2sfcdbrgwJPsAWeK566GBh7e_4A6s5XwJNNZsZFU6xAUd5Zb1TexkfpLWxwXOPrui4PAmHyXT4p09n2mGWMJaRAxj7maHh7kQ9w",
  //   },
  //   "tenantId": null,
  //   "uid": "sjpUXocI1pWj168JjM1q0GYASan2",
  // }
  const onSavePress = (username, bio, image) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: username,
        bio: bio,
        photoURL: image
      })
      .then(function() {
        // Update successful.
        console.log('successfully updated');
        console.log(user);
      });

    if (user != null) {
      user.providerData.forEach(function(profile) {
        profile.bio = bio;
      });
    }
    console.log(user);
  };
  return (
    <View style={{ flex: 1, top: 10 }}>
      <View style={style.contaienr}>
        <TouchableOpacity onPress={pickImage}>
          <Avatar size='xlarge' title={username.slice(0,2)} rounded source={{ uri: image }} />
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: 'center' }} h3>
        Select Photo
      </Text>

      <View style={style.contaienr}>
        <Input
          value={username}
          onChangeText={text => setUserName(text)}
          autoCorrect={false}
          placeholder='Enter Username'
        />
        <Input
          value={bio}
          onChangeText={text => setBio(text)}
          autoCorrect={false}
          placeholder='Enter Bio'
        />
        <Button
          title='Save'
          onPress={() => {
            onSavePress(username, bio, image);
            dispatch({ type: "server/join", data: {username: username, bio: bio, avatarImg: image, name: navigation.getParam('name')} });
           
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  contaienr: {
    padding: 25,
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    padding: 10
  }
});
