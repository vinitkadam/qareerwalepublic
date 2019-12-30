import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Animated
} from "react-native";
import {
    Icon
} from "native-base";

class BackArrowButton extends Component {
    render() {
        return (

            <Animated.View
                style={{
                    opacity: this.props.backButtonOpacity, //animated
                    position: 'absolute',
                    bottom: 40,
                    marginLeft: this.props.backButtonMarginLeft, //animated
                }}
            >
                <TouchableOpacity
                    onPress={() => this.props.onPress()}
                >
                    <View
                        style={{
                            height: 40, width: 40,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#A8B6BF',
                            justifyContent: 'center', alignItems: 'center',
                        }}
                    >

                        <Icon name='ios-arrow-round-back' style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' }} />
                    </View>
                </TouchableOpacity>
            </Animated.View>

        );
    }
}
export default BackArrowButton;