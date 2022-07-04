import React  from 'react';
import { Text ,View,  StyleSheet } from 'react-native';


const ComponentScreen = () => {
    return (
    <View>
        <Text style={styles.textStyle}>This is the ComponentScreen</Text> 
    </View>
    
    );

};

const styles = StyleSheet.create({

    textStyle: {
        fontSize : 30
    }
});


export default ComponentScreen;
