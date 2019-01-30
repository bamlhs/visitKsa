import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Avatar, ListItem } from 'react-native-elements';
import CustomizedListItem from '../components/CustomizedListItem';
import { getPlaces } from '../redux/actions/placesActions';

class PlacesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        loading: false,
    };
    this.renderItem = this.renderItem.bind(this);
    this.changeRedux = this.changeRedux.bind(this);
  }
  componentDidMount() {
   this.props.getPlaces();
  }
  //({item}) => <Text>{item.name}</Text>
  renderItem = ({item}) => (
      <CustomizedListItem 
      showImage
      item={item}
    />
  );
  componentDidUpdate() {
    if (this.props.places.error) {
      Alert.alert("ERROR", "Server not responding");
      
    }
  }
  changeRedux = () => {
    console.log("changeRedux");
   
    
  }
  render() {
    console.log(this.props);
    
    if (this.props.places.loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <ActivityIndicator size={1} color={'red'} />
            </View>
        );
    }
    return (
      <View style={{backgroundColor: "#eeeeee", flex: 1,}}>
<FlatList
keyExtractor={(item) => (item._id)}
  data={this.props.places.data}
  renderItem={this.renderItem}
/>
<Button onPress={this.changeRedux} title="Change Me" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places,
});


export default connect(mapStateToProps, {getPlaces})(PlacesScreen);
