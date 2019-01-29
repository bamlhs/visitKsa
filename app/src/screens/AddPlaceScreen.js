import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomizedButton from '../components/CustomizedButton';
import { Input, CheckBox } from 'react-native-elements';
import qs from 'qs';
import axios from 'axios';
class AddPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        checked: false,
        added: false,
    };
    this.onSavePress = this.onSavePress.bind(this);
  }
  onSavePress = () => {
    const { name } = this.state;
    const data =    {
        "thumb": "https://lorempixel.com/400/400/city/",
        "name": "National Museum of Saudi Arabia",
        "stars": 4,
        "category": "Historical Interest"
    };

        
    const url = 'https://rnc.herokuapp.com/api/places';
    console.log(JSON.stringify(data));
    
    axios.post(url, JSON.stringify(data)
      )
    .then((resp) => (this.setState({added : true})))
    .catch((error) => {
        console.log(JSON.parse(JSON.stringify(error)))
    }

    )
  }

  render() {
      console.log(this.state.title);
    if (this.state.added) {
        return (
            <Text>Your place has been added.</Text>
        );
    }

    return (
      <View>
        <Input placeholder="name" 
        onChangeText={(name) => (this.setState({name}))}
        />

<CheckBox
  center
  title='Historical Interest'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress={() => this.setState({checked: !this.state.checked})}
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Historical Structure'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.checked}
/>
        <CustomizedButton title="Save New" onPress={this.onSavePress
        } />

      </View>
    );
  }
}

export default AddPlaceScreen;
