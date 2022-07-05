import React from 'react';
import {Image , Text , View , StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';


const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>

            <ImageDetails title="Forest" source={require('../../assets/forest.jpg') } score="6"/>
            <ImageDetails title="Beach" source={require('../../assets/beach.jpg') } score="9" />
            <ImageDetails title="Mountain" source={require('../../assets/mountain.jpg') }  score="8" />

        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;