import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomizedButton from '../components/CustomizedButton';
import { Input, CheckBox, Icon, Button, Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';


import { BASE_URL } from '../config';
import qs from 'qs';
import axios from 'axios';
class AddPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      checked: false,
      added: false,
      disabled: true,
      image: '',
    };
    this.onSavePress = this.onSavePress.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }
  onSavePress = () => {
    const { name, image } = this.state;
    const data = {
      "thumb": "https://lorempixel.com/400/400/city/",
      name,
      "stars": 4,
      "category": "Historical Interest",
    };


    const url = `${BASE_URL}/api/places`;
    axios.post(url, data

    )
      .then((resp) => (this.setState({ added: true })))
      .catch((error) => {
        console.log(JSON.parse(JSON.stringify(error)))
      }

      )
  }
  onSelectImage = () => {

    const options = {
      title: 'Select Place Image',
      storageOptions: {
        quality: 0.4,
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        const source = { uri: response.data };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          image: source,
        });
      }
    });
  }
  render() {
    console.log(this.state.title);
    if (this.state.added) {
      this.props.navigation.navigate("places");

    }

    return (
      <View>
        <Input placeholder="name"
          onChangeText={(name) => (this.setState({ name, disabled: false }))}
        />

        <CheckBox
          center
          title='Historical Interest'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({ checked: !this.state.checked })}
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Historical Structure'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
        />
        <Button
          raised
          icon={{ name: 'camera' }}
          
          onPress={this.onSelectImage}
        />
        <Avatar source={this.state.image} size={"xlarge"} />

        <CustomizedButton disabled={this.state.disabled} title="Save New" onPress={this.onSavePress
        } />

      </View>
    );
  }
}

export default AddPlaceScreen;
