import React , {useState} from 'react';
import {Button , Text , View , StyleSheet} from 'react-native';


const CounterScreen = () => {

    const [counter , setCounter ] = useState(0);

    return (
        <View>
        <Button title = 'Increment Counter'
        onPress={ () => {setCounter(counter + 1)}} />
        <Button title = 'Decrement Counter'
        onPress={ () => {setCounter(counter -1)}}/>
        <Text> Counter Value- {counter}</Text>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default CounterScreen;

