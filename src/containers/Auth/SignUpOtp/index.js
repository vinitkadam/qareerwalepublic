import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    Animated,
    Keyboard,
    Dimensions,
    Platform,
    ImageBackground,
    Alert,
    TouchableOpacity
} from "react-native";
import {
    Container,
    Content,
    Icon
} from "native-base";
import colors from "../../../colors";
import { Transition } from "react-navigation-fluid-transitions";
import validator from 'validator'
import ActiveTabBarIndicator from '../../../components/ActiveTabBarIndicator';
// import CodeInput from 'react-native-confirmation-code-input'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const win = Dimensions.get('window')
class SignUpOtp extends Component {

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)

        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(10)
    }

    componentWillUnmount() {
        Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow)

        Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide)

        Keyboard.removeListener('keyboardDidShow', this.keyboardWillShow)

        Keyboard.removeListener('keyboardDidHide', this.keyboardWillHide)
    }

    state = {
        keyboardHeight: 0,
        otp: '',
    }

    keyboardWillShow = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        }
        else {
            duration = event.duration
        }

        this.setState({ keyboardHeight: event.endCoordinates.height })

        Animated.parallel([

            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height
            })

        ]).start()

    }

    keyboardWillHide = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        }
        else {
            duration = event.duration
        }

        this.setState({ keyboardHeight: 0 })

        Animated.parallel([

            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: 10
            })

        ]).start()
    }

    handleOtpChange = (code) => {
        if (code.length == 4 && validator.isNumeric(code)) {
            if (code === '1234') {
                this.props.navigation.navigate('app')
            } else {
                Alert.alert(
                    'Error',
                    'Please check OTP and try again',
                    [
                        // {
                        // text: 'Cancel',
                        // onPress: () => console.log('Cancel Pressed'),
                        // style: 'cancel',
                        // },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
            }
        }
    }

    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight, backgroundColor: colors.primary }}>
                <Content style={{ marginBottom: this.state.keyboardHeight }}>

                    <View style={{
                        height: win.height - StatusBar.currentHeight, //animated
                    }}>
                        <View
                            style={{
                                height: 110
                            }}
                        >
                            <ImageBackground
                                source={require('../../../../assets/images/image-bg.jpg')}
                                style={{
                                    flex: 1,
                                    width: win.width,
                                    resizeMode: 'cover'
                                }}
                            >
                                <View style={{ backgroundColor: 'rgba(61, 78, 90, 0.5)', flex: 1 }}>

                                    {/* animated back arrow button */}
                                    <Transition appear='left'>
                                        <View
                                            style={{
                                                height: 40, width: 40,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#A8B6BF',
                                                justifyContent: 'center', alignItems: 'center',
                                                marginLeft: 40,
                                                marginTop: 30
                                            }}
                                        >
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.goBack()}
                                            >
                                                <Icon name='ios-arrow-round-back' style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </Transition>

                                    {/* Tab bar login signup  */}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            height: 30,
                                            position: 'absolute',
                                            bottom: 3,
                                            marginLeft: 50,
                                        }}
                                    >
                                        <Transition shared="signUpTab">
                                            <View style={{ width: 90, height: 100, backgroundColor: 'rgba(0,0,0,0)' }}>
                                                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'work-sans-medium' }}>Sign Up</Text>
                                            </View>
                                        </Transition>
                                    </View>
                                    {/* Active Tab Bar indicator */}
                                    <ActiveTabBarIndicator
                                        activeIndicatorWidth={win.width}
                                        activeIndicatorMarginLeft={0}
                                    />
                                </View>

                            </ImageBackground>
                        </View>

                        <View
                            style={{
                                height: win.height - 110 - StatusBar.currentHeight,
                                backgroundColor: colors.primary,
                                alignItems: 'center'
                            }}
                        >
                            <View style={styles.mobileNumberContainer}>
                                <Text style={styles.mobileNumberText}>9876543210</Text>
                            </View>
                            <Text style={styles.enterOtpText}>Enter OTP you have received</Text>
                            <View
                                style={{
                                    opacity: 1,
                                    height: 80,
                                    width: win.width - 80,
                                    marginTop: 20,
                                }}
                            >

                                <OTPInputView
                                    style={{ width: '100%', height: 60 }}
                                    pinCount={4}
                                    code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                    onCodeChanged={code => this.setState({ code: code })}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={{
                                        backgroundColor: '#FFFFFF',
                                        width: 45,
                                        height: 45,
                                        alignItems: 'center',
                                        borderWidth: 0,
                                    }}
                                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                    onCodeFilled={code => this.handleOtpChange(code)}
                                />
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = {
    mobileNumberContainer: {
        backgroundColor: colors.primaryDark,
        width: win.width - 80,
        height: 60,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mobileNumberText: {
        color: 'white',
        fontFamily: 'work-sans-medium',
        fontSize: 26,
    },
    enterOtpText: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 18,
        marginTop: 20,
        color: colors.primaryDark
    }
}
export default SignUpOtp;