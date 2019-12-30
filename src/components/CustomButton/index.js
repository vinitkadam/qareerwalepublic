import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { StackActions } from 'react-navigation';

export default class CustomButton extends Component {
    state = { 
        animatePress: new Animated.Value(1)
    }

    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.96,
            duration: 100,
            useNativeDriver: true
        }).start();
    }

    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start();
    }
    
    render() {
        const pushAction = StackActions.push({
            routeName: this.props.routeName,
        });
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                        this.props.navigationProps.dispatch(pushAction);
                    }
                }
                onPressIn={() => this.animateIn()}
                onPressOut={() => this.animateOut()}
            >
                <Animated.View style={[styles.card, {
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }, this.props.style]}>
                    {this.props.children}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    card: {
        marginVertical: 0,
        marginHorizontal: 5,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#ccc',
        flexWrap: 'nowrap',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 16   
    },
}