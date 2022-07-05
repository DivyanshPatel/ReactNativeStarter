import React from 'react';
import {Image , Text , View , StyleSheet} from 'react-native';


const ImageDetails = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Image source={props.source}/>
            <Text>Image Score - {props.score}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({

});

export default ImageDetails;