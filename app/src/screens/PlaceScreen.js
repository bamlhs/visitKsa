import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';


class PlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, thumb, category, createDate } = this.props.places.selectedItem;

    return (
      <ScrollView>
        <Card title={name} featuredSubtitle={category} image={{uri: thumb}} />
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
    places: state.places,
  });
  
export default connect(mapStateToProps, {})(PlaceScreen);
