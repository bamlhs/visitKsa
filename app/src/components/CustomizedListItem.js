import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import StarRating from 'react-native-star-rating';
import { Image } from 'react-native-elements';

const CustomizedListItem = (
    
    {item, showImage, onPress}) => {
    const { width, height} = Dimensions.get('window');

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={{ marginBottom: 10, flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 2,
                  }}>
                {showImage && 
                 <Image source={{uri: item.thumb}}
                    style={{width, height: height/2}}
                    resizeMode={'cover'} 
                    PlaceholderContent={<ActivityIndicator color={"#fff"}/>}

                    />
                }
                 </View>
            <View style={{
                flex: 1, 
    
                flexDirection: 'row-reverse',
            }}>
                <View style={{ flex: 1, }}>
                    <StarRating
                        maxStars={5}
                        rating={item.stars}
                        starSize={20}
                        fullStarColor={'rgb(107,209,61)'}
                    />
                </View>
                <View style={{ flex: 2, }}>
                    <Text style={{
                        opacity: 0.9,
                        fontSize: 18,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        lineHeight: 21,
                        letterSpacing: 0,
                        textAlign: "left",
                        color: "#000000"
                    }}>
                    {item.name}
                    </Text>
                    <Text style={{
                        opacity: 0.5,
                        fontSize: 15,
                        fontWeight: "300",
                        fontStyle: "normal",
                        lineHeight: 18,
                        letterSpacing: 0,
                        textAlign: "left",
                        color: "#000000"
                    }}>
                    {item.category}
                    </Text>
                </View>


            </View>

        </View></TouchableOpacity>
    )
};

export default CustomizedListItem;
