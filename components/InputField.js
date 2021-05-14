import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';



const InputField = props => {

    const [enteredTodo,setEnteredTodo] = useState('');
    const [inputText,setInputText] = useState('');

    const setTodo = entered =>{
        setEnteredTodo(entered);
    }

    const removeText = ()=>{
        setEnteredTodo("");
    }

    return (
        <View>
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
            <View>
                <TouchableOpacity onPress={removeText} style={{ backgroundColor:'red' ,height: 50,width:'80%', marginTop: 0 }}>
                    <Text>Clear the input !!!</Text>
                </TouchableOpacity>
                {/* <Button color='red'  title="Clear input box" onPress={removeText}/> */}
            </View>
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