import React, { Component } from "react";
import { 
    View,
    Text,
    Animated
} from "react-native";
import {
    Icon
} from "native-base";
import colors from '../../../../../colors'

class SocialLogin extends Component {
    render() {
        return (
            <Animated.View 
                style={{ 
                    position: 'absolute',
                    bottom: 30,
                    opacity: this.props.socialLoginContainerOpacity,
                    opacity: this.props.loginSectionSocialOpacity
                }}
            >
                <Text style={{ fontSize: 18, fontFamily: 'work-sans-semi-bold', color: colors.primaryDark}}>Login with social account</Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon style={{ color: colors.primaryDark, marginHorizontal: 15 }} name='logo-google' size={30} />
                    <Icon style={{ color: colors.primaryDark, marginHorizontal: 15 }} name='logo-facebook' size={30} />
                </View>
            </Animated.View>
        );
    }
}
export default SocialLogin;