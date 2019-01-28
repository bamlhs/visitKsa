import React from 'react';
import { Text, View,  StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    style: {
        backgroundColor: 'transparent',
    },
    buttonStyle: {
        borderColor: 'rgb(107,209,61)',
        borderRadius: 10,
        borderWidth: 2,     
        backgroundColor: 'transparent',
    },
    containerStyle: {
        
        padding: 10,
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#707070"
    }

});
const CustomizedButton = ({
    title, onPress
}) => (
<Button 
    style={styles.style}
    buttonStyle={styles.buttonStyle}
    containerStyle={styles.containerStyle}
    titleStyle={styles.titleStyle}
    title={title}
    onPress={onPress}

/>
);

export default CustomizedButton;
