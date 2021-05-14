import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import InputField from './components/InputField';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos:[]
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    //currentTodos = []
    currentTodos = [{ key:this.state.todos.length.toString(),value:todo},...this.state.todos];
    this.setState({
      todos:currentTodos
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Reminder</Text>
          <Text style={styles.manoCode}>by manoCode</Text>
        </View>
        <InputField addTodo={this.addTodo} />
        <FlatList
          data={this.state.todos} renderItem={
            itemData=> <Todo data={itemData.item.value} />
          }
        />
        <StatusBar style="auto" />
      </View>
    );
  }

}

export default App;




/*
export default function App() {

  const [todos,setTodos] = useState([]);
  

  const addTodo = todo=>{
    //setTodos(currentTodos=>[...currentTodos,{ key:currentTodos.length.toString(),value:todo}]);
    setTodos(currentTodos=>[{ key:currentTodos.length.toString(),value:todo},...currentTodos]);
    
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Reminder</Text>
        <Text style={styles.manoCode}>by manoCode</Text>
      </View>
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
*/

const styles = StyleSheet.create({
  screen : {
    paddingTop:50,
    paddingLeft:20
  },
  title:{
    fontSize:30
  },
  manoCode:{
    fontSize:15,
    paddingLeft:10,
    color:'#4B4B48'
  },
  header:{
    flexDirection:'row',
    alignItems:'center'
  }
});


