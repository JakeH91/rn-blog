import React, { useContext} from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View style={{ flex: 1 }}>
    <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
   </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({});

export default ShowScreen;