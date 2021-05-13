import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const InputField = props => {

    const [enteredTodo,setEnteredTodo] = useState('');

    const setTodo = entered =>{
        setEnteredTodo(entered);
    }

    return (
        <View>
            <TextInput 
                placeholder="Enter the TODO !!!"
                onChangeText={setTodo}
                value={enteredTodo}
            />
            <Button title="+" onPress={props.addTodo.bind(this,enteredTodo)} />
        </View>
    );
};

export default InputField;