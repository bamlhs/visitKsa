import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import styles from './styles';
import CustomizedButton from '../components/CustomizedButton';
export default class DashBoardScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(Dimensions.get("window"));

        const { width, height } = Dimensions.get("window");
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: width, height: height }}
                    resizeMode={'cover'}
                    source={require('../images/masmk.jpg')}>
                    <View style={styles.mainPageView}>
                    
                    </View>
                    <View style={styles.mainButtonsView}>
                        <CustomizedButton title="Show Places"
                          onPress={()=>(this.props.navigation.navigate('places')
                        )}/>
                        <CustomizedButton title="Add Place" onPress={()=> this.props.navigation.navigate('add')
                        }/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
