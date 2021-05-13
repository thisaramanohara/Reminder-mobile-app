import React from 'react';
import { View, Text } from 'react-native';

const Todo = props=>{
    return (
        <View>
            <Text>
                {props.data}
            </Text>
        </View>
    );
}

export default Todo;