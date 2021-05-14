import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = props=>{
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.todo}>
                <Text>
                    {props.data}
                </Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    todo: {
        padding:10,
        marginVertical:10,
        backgroundColor:'#24D29A',
        width:'90%'
      }
});

export default Todo;