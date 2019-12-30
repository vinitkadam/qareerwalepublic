import React, { Component } from "react";
import {
    View,
    Text,
    Animated,
    Dimensions
} from "react-native";
import {
    Container,
    Content
} from "native-base";

const win = Dimensions.get('window')
class TopContainer extends Component {


    render() {

        return (
            <Animated.View
                style={{
                    opacity: this.props.tab === 'login' ? this.props.topContainerOpacityLogin : this.props.topContainerOpacitySignUp, //animated
                }}
            >
                <Animated.Text
                    style={{
                        // backgroundColor: 'red',
                        height: 48,
                        width: 226,
                        fontFamily: 'work-sans-medium',
                        fontSize: this.props.brandFontSize,
                        color: '#FFDC67',
                        marginTop: this.props.brandMarginTop,
                        marginLeft: this.props.brandMarginLeft
                    }}
                >
                    Qareerwale
                </Animated.Text>
                <Animated.View
                    style={{
                        // backgroundColor: 'green',
                        height: 134,
                        width: win.width - 100,
                        marginLeft: this.props.brandSubTitleMarginLeft,
                        opacity: 1,
                        marginTop: this.props.brandSubTitleMarginTop
                    }}
                >
                    <Animated.Text style={{ fontFamily: 'work-sans-semi-bold', fontSize: 30, color: this.props.brandSubTitleText1Color }}>
                        Find a career You’ll truly love
                    </Animated.Text>
                    <Animated.Text style={{ fontFamily: 'work-sans-semi-bold', fontSize: 20, color: this.props.brandSubTitleText2Color, marginTop: 10 }}>
                        Where would you like to be in 10 years?
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 50, opacity: this.props.dashDotsOpacity }}>
                    <View style={{ backgroundColor: '#FFDC67', marginRight: 10, width: 30, borderRadius: 2, height: 4 }} />
                    <View style={{ backgroundColor: '#FFFFFF', marginRight: 10, width: 4, borderRadius: 2, height: 4 }} />
                    <View style={{ backgroundColor: '#FFFFFF', marginRight: 10, width: 4, borderRadius: 2, height: 4 }} />
                </Animated.View>
            </Animated.View>
        );
    }
}
export default TopContainer;