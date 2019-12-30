import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Animated, 
    Dimensions
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import { Transition } from "react-navigation-fluid-transitions";

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
                <TouchableOpacity
                    onPress={() => this.props.shiftActiveIndicatorToLogin()}>
                <View style={{width: 70, height: 25, backgroundColor: 'rgba(0,0,0,0)'}}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'work-sans-medium' }}>Login</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.shiftActiveIndicatorToSignUp()}
                    disabled={this.props.signUpButtonDisabled}
                >
                <Animated.View style={{ opacity: this.props.SignUpButtonOpacity }}> 
                <Transition shared="signUpTab">
                    <View style={{width: 90, height: 100, backgroundColor: 'rgba(0,0,0,0)' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'work-sans-medium' }}>Sign Up</Text>
                    </View>
                </Transition>
                </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default TabBar;