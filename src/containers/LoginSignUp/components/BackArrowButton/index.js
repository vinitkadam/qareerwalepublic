import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    TouchableNativeFeedback,
    Animated
} from "react-native";
import { 
    Icon
} from "native-base";
import colors from '../../../../colors'

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
                <View 
                    style={{ 
                        height: 40, width: 40, 
                        borderRadius: 20,  
                        borderWidth: 1, 
                        borderColor: '#A8B6BF', 
                        justifyContent: 'center', alignItems: 'center',
                    }}
                >
                    <TouchableNativeFeedback
                        onPress={() => this.props.decreaseHeightOfBottomContainerLogin()}
                        background={TouchableNativeFeedback.SelectableBackground()}
                    >
                        <Icon name='ios-arrow-round-back' style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' }} />
                    </TouchableNativeFeedback>
                </View>
            </Animated.View>
        );
    }
}
export default BackArrowButton;