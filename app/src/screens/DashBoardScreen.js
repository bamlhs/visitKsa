import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import styles from './styles';
import {Input, Button} from 'react-native-elements';
import CustomizedButton from '../components/CustomizedButton';
import firebase from '../firebase';
export default class DashBoardScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.singin = this.singin.bind(this);
    }

    singin = () => {
        const { email, password } = this.state;
        
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((resp) => {
            const {uid} = resp.user;
            const data = {
                id: uid,
                email: email
            }
            firebase.database().ref().set(data)
            .then((response) => console.log(response)
            )
            .catch((error) => (console.log(error)));

        }
        )
        .catch((error) => (console.log(error)));
    }
 
    render() {
        console.log(this.state);
        
        console.log(Dimensions.get("window"));

        const { width, height } = Dimensions.get("window");
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: width, height: height }}
                    resizeMode={'cover'}
                    source={require('../images/masmk.jpg')}>
                    <View style={styles.mainPageView}>
                    <Input autoFocus
                    onChangeText={(email) => (this.setState({email}))}
                    />
                     <Input
                     secureTextEntry
                      onChangeText={(password) => (this.setState({password}))}
                    />
                    <Button title="sigin" onPress={this.singin} />
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
