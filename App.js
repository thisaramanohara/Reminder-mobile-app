import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import InputField from './components/InputField';
import Todo from './components/Todo';

export default function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = todo=>{
    setTodos(currentTodos=>[...currentTodos,{ key:currentTodos.length.toString(),value:todo}]);
  }

  return (
    <View style={styles.screen}>
      <Text>Reminder</Text>
      <InputField addTodo={addTodo} />
      <FlatList
        data={todos} renderItem={
          itemData=> <Todo data={itemData.item.value} />
        }
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding:50
  }
});


