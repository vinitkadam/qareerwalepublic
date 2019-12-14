import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StatusBar,
    TextInput,
    ImageBackground,
    Animated,
    TouchableOpacity,
    Keyboard,
    Platform,
    TouchableNativeFeedback,
    Alert
} from "react-native";
import {
    Container,
    Content,
    Tabs,
    Tab,
    Icon
} from "native-base";
import validator from 'validator'
import OtpInputs from 'react-native-otp-inputs'
import TopContainer from "./components/TopContainer";
import BackArrowButton from "./components/BackArrowButton";
import TabBar from "./components/TabBar";
import ActiveTabBarIndicator from './components/ActiveTabBarIndicator'
import SocialLogin from "./components/SocialLogin";
import colors from '../../colors'


const win = Dimensions.get('window')
class LoginSignUp extends Component {

    componentWillMount() {
        this.bottomContainerHeightLogin = new Animated.Value(win.height * 0.45)
        // this.bottomContainerHeightSignup = new Animated.Value(win.height * 0.45)
        // this.topContainerOpacity = new Animated.Value(1)
        // this.backButtonOpacity = new Animated.Value(0)
        // this.backButtonMarginLeft = new Animated.Value(0)
        // this.socialLoginContainerOpacity = new Animated.Value(1)
        this.otpContainerHeight = new Animated.Value(0)
        // this.otpContainerOpacity = new Animated.Value(0)
        this.activeIndicatorMarginLeft = new Animated.Value(50)
        // this.activeIndicatorWidth = new Animated.Value(60)

        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)

        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(10)
        this.forwardArrowOpacity = new Animated.Value(0)
        this.borderBottomWidth = new Animated.Value(0)
    }

    state = {
        tab: 'login',
        signUpHidden: true,
        loginZIndex: 100,
        SignUpZIndex: 0,
        signUpButtonDisabled: false,
        loginPointerEvents: 'none',
        forwardArrowDisabled: true,
        mobileNumber: ''
    }

    keyboardWillShow = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        }
        else {
            duration = event.duration
        }

        Animated.parallel([

            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
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

        Animated.parallel([

            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: 10
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 0
            })

        ]).start()
    }


    increaseHeightOfBottomContainerLogin = () => {
        console.log('clicked')
        this.setState({ tab: 'login', signUpButtonDisabled: true, loginPointerEvents: 'auto', forwardArrowDisabled: false })
        Animated.timing(this.bottomContainerHeightLogin, {
            toValue: win.height - 110,
            duration: 700
        }).start(() => {
            this.refs.textInputMobile.focus()
        })
    }

    decreaseHeightOfBottomContainerLogin = () => {
        this.setState({ tab: 'login', signUpButtonDisabled: false, loginPointerEvents: 'none', forwardArrowDisabled: true })
        Keyboard.dismiss()
        Animated.timing(this.bottomContainerHeightLogin, {
            toValue: win.height * 0.45,
            duration: 700
        }).start(() => {
            this.refs.textInputMobile.blur()
        })
    }

    shiftActiveIndicatorToSignUp = () => {
        this.setState({ loginZIndex: 0, SignUpZIndex: 100 })
        this.setState({ tab: 'signup' })
        this.setState({ signUpHidden: false })
        Animated.timing(this.activeIndicatorMarginLeft, {
            toValue: 120,
            duration: 700
        }).start()
    }

    shiftActiveIndicatorToLogin = () => {
        this.setState({ loginZIndex: 100, SignUpZIndex: 0 })
        Animated.timing(this.activeIndicatorMarginLeft, {
            toValue: 50,
            duration: 700
        }).start()
    }

    handleForwardArrowPress = () => {
        if (validator.isNumeric(this.state.mobileNumber) && this.state.mobileNumber.length === 10) {
            Alert.alert(
                'One Time Password Send',
                'Please enter the one time password sent to your mobile number',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            this.setState({ forwardArrowDisabled: true })
            Animated.timing(this.otpContainerHeight,
                {
                    toValue: 40,
                    duration: 700
                }
            ).start()
        } else {
            Alert.alert(
                'Error',
                'Please enter correct mobile number',
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

        const topContainerOpacityLogin = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [1, 0]
        })


        const backButtonOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [0, 1]
        })

        const backButtonMarginLeft = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [0, 40]
        })

        const socialLoginContainerOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [1, 0]
        })

        const forwardArrowOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [0, 1]
        })
        // Animated.timing(this.forwardArrowOpacity, {
        //     duration: duration,
        //     toValue: 1
        // }),

        // const otpContainerHeight = this.bottomContainerHeightLogin.interpolate({
        //     inputRange: [win.height * 0.45, win.height - 130 ],
        //     outputRange: [0, 40]
        // })

        const otpContainerOpacity = this.otpContainerHeight.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 1]
        })

        const otpTextOpacity = this.otpContainerHeight.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 1]
        })

        const otpContainerWidth = this.otpContainerHeight.interpolate({
            inputRange: [0, 40],
            outputRange: [win.width, win.width - 60]
        })

        const SignUpButtonOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.width * 0.45, win.height * 0.5, win.height - 130],
            outputRange: [1, 1, 0]
        })

        //SignUp animations
        const activeIndicatorWidth = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [60, 80]
        })

        topContainerOpacitySignUp = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [1, 0]
        })

        bottomContainerHeightSignUp = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [win.height * 0.45, win.height - 100]
        })

        signUpSectionOpacity = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [0, 1]
        })

        loginSectionOpacity = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 55],
            outputRange: [1, 0]
        })




        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('./images/image-bg.jpg')} style={{ flex: 1, width: win.width, resizeMode: 'cover' }}>
                        <View style={{ backgroundColor: 'rgba(61, 78, 90, 0.5)', flex: 1 }}>

                            <TopContainer
                                tab={this.state.tab}
                                topContainerOpacityLogin={topContainerOpacityLogin}
                                topContainerOpacitySignUp={topContainerOpacitySignUp}
                            />

                            {/* animated back arrow button */}
                            <BackArrowButton
                                backButtonOpacity={backButtonOpacity}
                                backButtonMarginLeft={backButtonMarginLeft}
                                decreaseHeightOfBottomContainerLogin={() => this.decreaseHeightOfBottomContainerLogin()}
                            />

                            {/* Tab bar login signup  */}
                            <TabBar
                                shiftActiveIndicatorToLogin={() => this.shiftActiveIndicatorToLogin()}
                                shiftActiveIndicatorToSignUp={() => this.shiftActiveIndicatorToSignUp()}
                                SignUpButtonOpacity={SignUpButtonOpacity}
                                signUpButtonDisabled={this.state.signUpButtonDisabled}
                            />

                            {/* Active Tab Bar indicator */}
                            <ActiveTabBarIndicator
                                activeIndicatorWidth={activeIndicatorWidth}
                                activeIndicatorMarginLeft={this.activeIndicatorMarginLeft}
                            />
                        </View>

                    </ImageBackground>
                </View>

                {/* Bottom tab view container */}
                <Animated.View
                    style={{
                        height: this.state.tab == 'login' ? this.bottomContainerHeightLogin : bottomContainerHeightSignUp, //animated
                        backgroundColor: colors.primary
                    }}>

                    <View style={{ flex: 1, alignItems: 'center', }}>

                        {/* Login Section Start */}
                        <Animated.View
                            style={{
                                opacity: loginSectionOpacity,
                                width: win.width,
                                flex: 1,
                                alignItems: 'center',
                                zIndex: this.state.loginZIndex
                            }}
                        >
                            {/* Mobile number  */}

                            <TouchableOpacity
                                onPress={() => this.increaseHeightOfBottomContainerLogin()}
                            >
                                <View
                                    pointerEvents={this.state.loginPointerEvents}
                                    style={{
                                        flexDirection: 'row',
                                        marginHorizontal: 30,
                                        alignSelf: 'center',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        marginTop: 30,
                                    }}
                                >
                                    <TextInput
                                        value={this.state.mobileNumber}
                                        onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
                                        maxLength={10}
                                        keyboardType="numeric"
                                        ref="textInputMobile"
                                        style={{ flex: 1, fontSize: 20 }}
                                        placeholder="Enter your Mobile Number"
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </TouchableOpacity>
                            <Animated.Text
                                style={[
                                    styles.otpText,
                                    {
                                        opacity: otpTextOpacity
                                    }
                                ]}
                            >
                                Enter OTP you have received
                            </Animated.Text>


                            {/* OTP  */}
                            <Animated.View
                                style={{
                                    opacity: otpContainerOpacity,
                                    height: this.otpContainerHeight,
                                    width: otpContainerWidth,
                                    marginTop: 15,
                                }}
                            >
                                <OtpInputs
                                    handleChange={code => this.handleOtpChange(code)}
                                    numberOfInputs={4}
                                    focusedBorderColor={colors.primaryDark}
                                    inputContainerStyles={{
                                        backgroundColor: '#FFFFFF',
                                        width: 40,
                                        height: 40,
                                        alignItems: 'center',
                                    }}
                                    inputsContainerStyles={{
                                        justifyContent: 'space-between'
                                    }}
                                />
                            </Animated.View>

                        </Animated.View>

                        {/* Login Section End */}


                        {/* SignUp Section start */}

                        <Animated.ScrollView
                            style={{
                                position: 'absolute',
                                opacity: signUpSectionOpacity,
                                width: win.width,
                                hidden: this.state.signUpHidden,
                                zIndex: this.state.SignUpZIndex
                            }}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    alignSelf: 'center',
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginTop: 30,
                                }}
                            >
                                <TextInput
                                    ref="textInputName"
                                    style={{ flex: 1, fontSize: 20 }}
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    alignSelf: 'center',
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginTop: 10
                                }}
                            >
                                <TextInput
                                    keyboardType="numeric"
                                    ref="textInputMobileSignUp"
                                    style={{ flex: 1, fontSize: 20 }}
                                    placeholder="Mobile"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    alignSelf: 'center',
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginTop: 10
                                }}
                            >
                                <TextInput
                                    ref="textInputEmail"
                                    style={{ flex: 1, fontSize: 20 }}
                                    placeholder="Email"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    alignSelf: 'center',
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginTop: 10
                                }}
                            >
                                <TextInput
                                    ref="textInputClass"
                                    style={{ flex: 1, fontSize: 20 }}
                                    placeholder="Class"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </Animated.ScrollView>

                        {/* Signup Section end */}
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}
                            onPress={() => this.handleForwardArrowPress()}
                            disabled={this.state.forwardArrowDisabled}
                        >
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    height: 60, width: 60,
                                    right: 10,
                                    bottom: this.keyboardHeight, // animated
                                    opacity: forwardArrowOpacity,//animated
                                    zIndex: 100,
                                    backgroundColor: '#54575e',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 30
                                }}
                            >
                                <Icon name="md-arrow-forward" style={{ color: 'white' }} />
                            </Animated.View>
                        </TouchableNativeFeedback>

                        {/* Social Login Container */}
                        <SocialLogin
                            socialLoginContainerOpacity={socialLoginContainerOpacity}
                        />
                    </View>
                </Animated.View>
            </Container>
        );
    }
}

const styles = {
    textInputView: {
        flexDirection: 'row',
        marginHorizontal: 30,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 15,
    },
    otpInput: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpText: {
        marginTop: 30,
        color: colors.primaryDark,
        fontFamily: 'open-sans-semi-bold',
        fontSize: 18,
    },
    mobileNumberErrorText: {
        color: 'red',
        fontSize: 10,
        fontFamily: 'open-sans-semi-bold',
        alignSelf: 'flex-start',
        marginHorizontal: 30,
        marginVertical: 2
    }
}
export default LoginSignUp;