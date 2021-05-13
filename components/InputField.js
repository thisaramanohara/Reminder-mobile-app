import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const InputField = props => {

    const [enteredTodo,setEnteredTodo] = useState('');
    const [inputText,setInputText] = useState('');

    const setTodo = entered =>{
        setEnteredTodo(entered);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Enter the TODO !!!"
                onChangeText={setTodo}
                value={enteredTodo}
            />
            <Button title="+" onPress={props.addTodo.bind(this,enteredTodo)
            } />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',  
        alignItems:'center',
      },
      input:{
        width:'75%',
        borderBottomColor:'black' ,
        borderWidth:1 ,
        padding:10,
        margin:10
      }
});

export default InputField;