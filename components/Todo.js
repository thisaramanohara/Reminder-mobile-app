import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Todo = props=>{
    return (
        <View style={styles.todo}>
            <Text>
                {props.data}
            </Text>
        </View>
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