import React from 'react';
import { Text, StyleSheet,  Button , View } from 'react-native';


const HomeScreen = (props) => {
  
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
      onPress={ () => props.navigation.navigate('Image')}
      title='Go To Image Screen'/>
      <Button 
      onPress={ () => props.navigation.navigate('Components')}
      title='Go To Components Screen'/>
    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
