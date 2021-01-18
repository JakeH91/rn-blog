import React, { useContext} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View style={{ flex: 1 }}>
      <Text>{blogPost.title}</Text>
   </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;