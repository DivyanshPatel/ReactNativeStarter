import React from "react";
import {View , Text , StyleSheet , Button} from 'react-native';

const ColorPicker = ({colorValue , onIncrease , onDecrease}) => {

    return <View>
        <Text>{colorValue}</Text>
        <Button title = {`Increase ${colorValue}`}
        onPress={() => onIncrease()}
        />
        <Button title= {`Decrease ${colorValue}`}
         onPress={() => onDecrease()}
        />
        </View>

};

const styles = StyleSheet.create({

});

export default ColorPicker;