import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from '@expo/vector-icons'; 


export default function FriendListScreen({ navigation }) {
  const usersOnline = useSelector(state => state.usersOnline);
  const { itemContainerStyle, avatarImgStyle, avatarNameViewStyle } = styles;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={usersOnline}
        renderItem={({ item }) => {
          return (<View>
            <SafeAreaView style={{flex:1}}>
            
              <TouchableOpacity
              style = {{alignItems: 'flex-start', margin: 16}}
              onPress={navigation.openDrower}
              >
                

              </TouchableOpacity>
            </SafeAreaView>
            
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  name: item.username,
                  userId: item.userId
                })
              }
            >
              <View style={itemContainerStyle}>
                <Image style={avatarImgStyle} source={{ uri: item.avatar }} />
                <View style={avatarNameViewStyle}>
                  <Text style={{ fontSize: 20 }}>{item.username}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.userId}
      />
    </View>
  );
}



FriendListScreen.navigationOptions = ({navigation}) =>{
  return {
    headerLeft: () => (
     <TouchableOpacity style={{padding: 10}}
          onPress={() => navigation.navigate('Profile')}>
      <FontAwesome name="bars" size={24} color="black" />
    </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  itemContainerStyle: { flex: 1, flexDirection: "row"},
  avatarImgStyle: { width: 60, height: 60, borderRadius: 50, margin: 5},
  avatarNameViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 4,
    borderBottomWidth: 0.3,
    borderColor: "lightgrey"
  }
});