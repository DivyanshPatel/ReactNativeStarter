import React from 'react';
import {View , Text , StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ListScreen = () => {

    const friends = [
        {name: 'Steve',age: '10'},
        {name: 'Harvey' , age: '15'},
        {name: 'Dona' , age: '30'},
        {name : 'Ratchel' , age: '45'}
    ];

    return (
        <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={(data)=>{
            return <Text style={styles.margin}>{data.item.name} - Age {data.item.age}</Text>
        }}
        />
    );
};


const styles = StyleSheet.create({
    margin: {
        marginVertical: 40
    }
});




export default ListScreen;