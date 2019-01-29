import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { Button, Avatar, ListItem } from 'react-native-elements';


class PlacesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        loading: false,
    };
    this.renderItem = this.renderItem.bind(this);
  }
  componentDidMount() {

    const url = 'https://rnc.herokuapp.com/api/places';
    axios.get(url)
    .then((resp) => (this.setState({data: resp.data})
    ))
    .catch((err) => (console.log(err)
    ))
  }
  //({item}) => <Text>{item.name}</Text>
  renderItem = ({item}) => (
    <ListItem 
    onPress={() => (console.log(item)
    )}
    title={item.name} subtitle={item.category} 
    leftAvatar={{ rounded: true, source: { uri: item.thumb } }} 
    />
  );
  render() {
      console.log(this.state.data);
    if (this.state.data.length == 0 ) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <ActivityIndicator size={1} color={'red'} />
            </View>
        );
    }
    return (
      <View>
<FlatList
keyExtractor={(item) => (item._id)}
  data={this.state.data}
  renderItem={this.renderItem}
/>
      </View>
    );
  }
}

export default PlacesScreen;
