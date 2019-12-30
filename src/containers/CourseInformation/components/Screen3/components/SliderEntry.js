import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import styles from '../styles/SliderEntry.style';
import colors from '../../../../../colors';

const win = Dimensions.get('window')
// Slider Entry componet of the carousal on the homepage
export default class SliderEntry extends Component {
    
    _renderItem(item) {
        console.log('item1', item)
        if(item.courseName) {
            return(
                <View style={{ padding: 20,  height: 300, marginHorizontal: 10, marginVertical: 20, borderRadius: 8, borderColor: '#E5E5E5', borderWidth: 1 }}>
                    <Text style={styless.courseName}>
                        {item.courseName}
                    </Text>
                    <Text style={styless.courseDesc} numberOfLines={6}>
                        {item.courseDesc}
                    </Text>
                    <Text style={styless.readMore}>
                        Read more
                    </Text>
                </View>
            )
        }
        
        return (
            <View style={{ padding: 20, height: 286, marginHorizontal: 10, marginVertical: 20, borderRadius: 8, borderColor: '#E5E5E5', borderWidth: 1, alignItems: 'center' }}>
                <Image source={{ uri: item.collegeImage }} style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius: 8, marginTop: -38 }}/>
                <Text style={styless.collegeName}>
                    {item.name}
                </Text>
                <Text style={styless.collegeAddress}>{item.address}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', marginTop: 25 }}>
                    <View style={styless.button}>
                        <Text style={styless.buttonText}>Website</Text>
                    </View>
                    <View style={[styless.button, { marginHorizontal: 10 }]}>
                        <Text style={styless.buttonText}>Directions</Text>
                    </View>
                    <View style={styless.button}>
                        <Text style={styless.buttonText}>Call</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
                <View style={[styles.imageContainer, { justifyContent: 'flex-end'}]}> 
                    { this._renderItem(this.props.data) }
                </View>
        );
    }
}

const styless = {
    courseName: {
        fontFamily: 'work-sans-medium',
        fontSize: 26,
        color: colors.secondary
    },
    courseDesc: {
        fontFamily: 'work-sans',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 15,
    },
    readMore: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 20
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'work-sans-medium',
        fontSize: 10,
        paddingVertical: 12,
        color: colors.primaryDark
    },
    collegeName: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 20
    },
    collegeAddress: {
        fontFamily: 'work-sans',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 20
    }
}
