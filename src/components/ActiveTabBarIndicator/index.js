import React, { Component } from "react";
import {
    View,
    Dimensions,
    Animated
} from "react-native";
import colors from '../../colors'
import { Transition } from "react-navigation-fluid-transitions";

const win = Dimensions.get('window')

class TabBarActiveIndicator extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: colors.primary,
                    width: win.width,
                    position: 'absolute',
                    bottom: 0

                }}

            >
                {/* <Transition shared="activityIndicator"> */}
                <Animated.View
                    style={{
                        backgroundColor: 'white',
                        height: 3,
                        width: this.props.activeIndicatorWidth, //animated
                        marginLeft: this.props.activeIndicatorMarginLeft, //animated

                    }}
                />
                {/* </Transition> */}
            </View>
        );
    }
}
export default TabBarActiveIndicator;