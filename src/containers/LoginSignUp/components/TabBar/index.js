import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableNativeFeedback,
    Animated, 
    Dimensions
} from "react-native";
import { 
    Container,
    Content
} from "native-base";

class TabBar extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 30,
                    position: 'absolute',
                    bottom: 3,
                    marginLeft: 50,
                }}
            >
                <TouchableNativeFeedback
                    onPress={() => this.props.shiftActiveIndicatorToLogin()}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{width: 70, height: 25, backgroundColor: 'rgba(0,0,0,0)'}}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'work-sans-medium' }}>Login</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => this.props.shiftActiveIndicatorToSignUp()}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    disabled={this.props.signUpButtonDisabled}
                >
                <Animated.View style={{width: 90, height: 100, backgroundColor: 'rgba(0,0,0,0)', opacity: this.props.SignUpButtonOpacity }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'work-sans-medium' }}>Sign Up</Text>
                </Animated.View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
export default TabBar;