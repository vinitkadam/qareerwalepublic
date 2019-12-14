import React, { Component } from "react";
import { 
    View,
    Text,
    Animated
} from "react-native";
import { 
    Container,
    Content
} from "native-base";

class TopContainer extends Component {
    render() {

        return (
            <Animated.View 
                style={{ 
                    marginHorizontal: 50,
                    opacity: this.props.tab === 'login' ? this.props.topContainerOpacityLogin : this.props.topContainerOpacitySignUp, //animated
                }}
            >
                <Text style={{ fontFamily: 'work-sans-medium', fontSize: 18, color: '#FFDC67', marginTop: 40 }}>
                    Qareerwale
                </Text>
                <Text style={{ fontFamily: 'work-sans-semi-bold', fontSize: 30, color: '#FFFFFF', marginTop: 10, }}>
                    Find a career You’ll truly love
                </Text>
                <Text style={{ fontFamily: 'work-sans-semi-bold', fontSize: 20, color: '#FFFFFF', marginTop: 10 }}>
                    Where would you like to be in 10 years?
                </Text>
            
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ backgroundColor: '#FFDC67', marginRight: 10, width: 30, borderRadius: 2, height: 4 }}/>
                    <View style={{ backgroundColor: '#FFFFFF', marginRight: 10, width: 4, borderRadius: 2, height: 4 }}/>
                    <View style={{ backgroundColor: '#FFFFFF', marginRight: 10, width: 4, borderRadius: 2, height: 4 }}/>
                </View>
            </Animated.View>
        );
    }
}
export default TopContainer;