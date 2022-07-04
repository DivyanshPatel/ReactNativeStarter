import React  from 'react';
import { Text ,View,  StyleSheet } from 'react-native';


const ComponentScreen = () => {
    const name = 'Superman';
    return (
    <View>
        <Text style={styles.textStyle}>Getting Started with React native</Text> 
        <Text style={styles.subHeader}>My Name is {name}</Text>
    </View>
    
    );

};

const styles = StyleSheet.create({

    textStyle: {
        fontSize : 40
    },
    subHeader: {
        fontSize: 25
    }
});


export default ComponentScreen;
