import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    TextInput,
    Animated,
    StatusBar,
    TouchableOpacity,
    Keyboard,
    Platform,
    Alert,
    Easing
} from "react-native";
import {
    Container,
    Content,
    Icon
} from "native-base";
import { connect } from 'react-redux'
import validator from 'validator'
import TopContainer from "./components/TopContainer";
import TabBar from "./components/TabBar";
import ActiveTabBarIndicator from '../../../components/ActiveTabBarIndicator'
import SocialLogin from "./components/SocialLogin";
import colors from '../../../colors'
import { Transition } from "react-navigation-fluid-transitions";
import BackArrowButton from "../../../components/BackArrowButton";
import { loginWithPhoneNumber } from '../actions'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { SafeAreaView } from "react-navigation";


const win = Dimensions.get('window')

class LoginSignUp extends Component {

    componentWillMount() {
        console.log(win.width)
        this.bottomContainerHeightLogin = new Animated.Value(0)
        // this.bottomContainerHeightLogin = new Animated.Value(win.height * 0.45)
        this.otpContainerHeight = new Animated.Value(0)
        this.activeIndicatorMarginLeft = new Animated.Value(50)
        this.loginSectionSocialOpacity = new Animated.Value(0)
        // this.loginSectionSocialOpacity = new Animated.Value(1)
        this.imageBackgroundOpacity = new Animated.Value(0)
        // this.imageBackgroundOpacity = new Animated.Value(1)

        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(10)
        this.forwardArrowOpacity = new Animated.Value(0)
        this.borderBottomWidth = new Animated.Value(0)


        //image background text animations
        this.brandMarginTop = new Animated.Value((win.height - StatusBar.currentHeight - 48) / 2)
        // this.brandMarginTop = new Animated.Value(40)
        this.brandMarginLeft = new Animated.Value((win.width - 226) / 2)
        // this.brandMarginLeft = new Animated.Value(50)
        this.brandFontSize = new Animated.Value(40)
        // this.brandFontSize = new Animated.Value(22)

        this.brandSubTitleMarginLeft = new Animated.Value(win.width)
        // this.brandSubTitleMarginLeft = new Animated.Value(50)
        // this.brandSubTitleOpacity = new Animated.Value(0)
        this.brandSubTitleOpacity = new Animated.Value(1)
        // this.brandSubTitleMarginTop = new Animated.Value(40)
        this.brandSubTitleMarginTop = new Animated.Value(0)
    }


    state = {
        tab: 'login',
        signUpHidden: true,
        loginZIndex: 100,
        SignUpZIndex: 0,
        signUpButtonDisabled: false,
        loginPointerEvents: 'none',
        forwardArrowDisabled: true,
        mobileNumber: '',
        keyboardHeight: 0,
        otp: '',
    }

    componentDidMount() {
        this.renderIntroAnimation()
    }

    keyboardWillShow = (event) => {

        let duration = 0

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
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
            })

        ]).start()

    }

    keyboardWillHide = (event) => {

        let duration = 0

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
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 0
            })

        ]).start()
    }

    renderIntroAnimation = () => {
        Animated.sequence([
            Animated.delay(1000),
            Animated.parallel([
                Animated.timing(this.brandMarginTop, {
                    toValue: (win.height - StatusBar.currentHeight - 182) / 2,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.brandFontSize, {
                    toValue: 22,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.brandMarginLeft, {
                    toValue: 50,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.brandSubTitleMarginLeft, {
                    toValue: 50,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                // Animated.timing(this.brandSubTitleOpacity, {
                //     tovalue: 1,
                //     duration: 300,
                //     easing: Easing.inOut(Easing.linear)
                // }),
                Animated.timing(this.brandSubTitleMarginTop, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                })
            ]),
            Animated.delay(1000),
            Animated.parallel([
                Animated.timing(this.brandMarginTop, {
                    toValue: 40,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.bottomContainerHeightLogin, {
                    toValue: win.height * 0.45,
                    duration: 1000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.imageBackgroundOpacity, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.inOut(Easing.cubic)
                }),
            ]),
            Animated.delay(500),
            Animated.timing(this.loginSectionSocialOpacity, {
                toValue: 1,
                duration: 500,
                easing: Easing.inOut(Easing.cubic)
            })
        ]).start()
    }


    increaseHeightOfBottomContainerLogin = () => {
        console.log('clicked')
        this.setState({ tab: 'login', signUpButtonDisabled: true, loginPointerEvents: 'auto', forwardArrowDisabled: false })
        Animated.timing(this.bottomContainerHeightLogin, {
            toValue: win.height - 110,
            duration: 1000,
            easing: Easing.inOut(Easing.cubic)
        }).start(() => {
            this.refs.textInputMobile.focus()
        })
    }

    decreaseHeightOfBottomContainerLogin = () => {
        this.setState({ tab: 'login', signUpButtonDisabled: false, loginPointerEvents: 'none', forwardArrowDisabled: true })
        Keyboard.dismiss()
        Animated.parallel([
            Animated.timing(this.bottomContainerHeightLogin, {
                toValue: win.height * 0.45,
                duration: 1000,
                easing: Easing.inOut(Easing.cubic)
            }),
            Animated.timing(this.otpContainerHeight, {
                toValue: 0,
                duration: 1000,
                easing: Easing.inOut(Easing.quad)
            })
        ]).start(() => {
            this.refs.textInputMobile.blur()
            this.resetOTP()
            console.log(this.bottomContainerHeightLogin)
        })
    }

    shiftActiveIndicatorToSignUp = () => {
        this.setState({ loginZIndex: 0, SignUpZIndex: 100 })
        this.setState({ tab: 'signup' })
        this.setState({ signUpHidden: false })
        Animated.timing(this.activeIndicatorMarginLeft, {
            toValue: 120,
            duration: 1000,
            easing: Easing.inOut(Easing.cubic)
        }).start()
    }

    shiftActiveIndicatorToLogin = () => {
        this.setState({ loginZIndex: 100, SignUpZIndex: 0 })
        Animated.timing(this.activeIndicatorMarginLeft, {
            toValue: 50,
            duration: 1000,
            easing: Easing.inOut(Easing.cubic)
        }).start()
    }

    handleForwardArrowPress = () => {
        if (validator.isNumeric(this.state.mobileNumber) && this.state.mobileNumber.length === 10) {

            Alert.alert(
                'One Time Password Sent',
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
                    duration: 700,
                    easing: Easing.inOut(Easing.cubic)
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

    resetOTP = () => {
        this.setState({ otp: '' })
    };

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

        const imagebackgroundHeightLogin = this.bottomContainerHeightLogin.interpolate({
            inputRange: [0, win.height * 0.45, win.height - 130],
            outputRange: [win.height - StatusBar.currentHeight + 30, win.height * 0.55, 110]
        })

        const topContainerBackgroundColor = this.bottomContainerHeightLogin.interpolate({
            inputRange: [0, 1, win.height * 0.45],
            outputRange: ['rgba(61, 78, 90, 0)', 'rgba(61, 78, 90, 0.3)', 'rgba(61, 78, 90, 0.3)']
        })

        const brandSubTitleText1Color = this.bottomContainerHeightLogin.interpolate({
            inputRange: [0, 1, win.height * 0.45],
            outputRange: [colors.secondary, 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']
        })
        const brandSubTitleText2Color = this.bottomContainerHeightLogin.interpolate({
            inputRange: [0, 1, win.height * 0.45],
            outputRange: [colors.secondaryLight, 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']
        })

        const dashDotsOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [0, win.height * 0.45],
            outputRange: [0, 1]
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

        const otpContainerHeight = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.height * 0.45, win.height - 130],
            outputRange: [0, 40]
        })

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

        const otpContainerMarginTop = this.otpContainerHeight.interpolate({
            inputRange: [0, 40],
            outputRange: [300, 15]
        })


        const SignUpButtonOpacity = this.bottomContainerHeightLogin.interpolate({
            inputRange: [win.width * 0.45, win.height * 0.5, win.height - 130],
            outputRange: [1, 1, 0]
        })

        //SignUp animations
        const activeIndicatorWidth = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [60, 90]
        })

        const mainContainerHeight = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [win.height - StatusBar.currentHeight, win.height - StatusBar.currentHeight - 110 < 650 ? 650 - StatusBar.currentHeight : win.height - StatusBar.currentHeight]
        })

        const imagebackgroundHeightSignUP = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [win.height * 0.55, 110]
        })

        const topContainerOpacitySignUp = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [1, 0]
        })

        const bottomContainerHeightSignUp = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [win.height * 0.45, win.height]
        })

        const signUpSectionOpacity = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 120],
            outputRange: [0, 1]
        })

        const loginSectionOpacity = this.activeIndicatorMarginLeft.interpolate({
            inputRange: [50, 55],
            outputRange: [1, 0]
        })




        return (
            <SafeAreaView style={{ flex: 1, }}>
                <Container style={{ marginTop: StatusBar.currentHeight, backgroundColor: 'white' }}>
                    <Content style={{ marginBottom: this.state.keyboardHeight }}>
                        <Animated.View style={{
                            height: mainContainerHeight, //animated
                        }}>
                            <Animated.View
                                style={{
                                    height: this.state.tab == 'login' ? imagebackgroundHeightLogin : imagebackgroundHeightSignUP, //animated 
                                }}
                            >
                                <Animated.Image
                                    source={require('../../../../assets/images/image-bg.jpg')}
                                    style={{
                                        flex: 1,
                                        position: 'absolute',
                                        width: win.width,
                                        height: this.state.tab == 'login' ? imagebackgroundHeightLogin : imagebackgroundHeightSignUP, //animated 
                                        backgroundColor: 'transparent',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        resizeMode: 'cover',
                                        opacity: this.imageBackgroundOpacity
                                    }}
                                />
                                <Animated.View style={{ backgroundColor: topContainerBackgroundColor, flex: 1, zIndex: 100 }}>

                                    <TopContainer
                                        tab={this.state.tab}
                                        topContainerOpacityLogin={topContainerOpacityLogin}
                                        topContainerOpacitySignUp={topContainerOpacitySignUp}
                                        brandMarginTop={this.brandMarginTop}
                                        brandMarginLeft={this.brandMarginLeft}
                                        brandFontSize={this.brandFontSize}
                                        brandSubTitleMarginLeft={this.brandSubTitleMarginLeft}
                                        brandSubTitleOpacity={this.brandSubTitleOpacity}
                                        brandSubTitleMarginTop={this.brandSubTitleMarginTop}
                                        sloganMarginLeft={win.width}
                                        brandSubTitleText1Color={brandSubTitleText1Color}
                                        brandSubTitleText2Color={brandSubTitleText2Color}
                                        dashDotsOpacity={dashDotsOpacity}
                                    />

                                    {/* animated back arrow button */}
                                    <BackArrowButton
                                        backButtonOpacity={backButtonOpacity}
                                        backButtonMarginLeft={backButtonMarginLeft}
                                        onPress={() => this.decreaseHeightOfBottomContainerLogin()}
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
                                </Animated.View>

                                {/* </Animated.Image> */}
                            </Animated.View>

                            {/* Bottom tab view container */}
                            <Animated.View
                                style={{
                                    height: this.state.tab == 'login' ? this.bottomContainerHeightLogin : bottomContainerHeightSignUp, //animated
                                    backgroundColor: colors.primary
                                }}
                            >

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
                                                opacity: otpContainerOpacity, //animated
                                                height: this.otpContainerHeight, //animated
                                                width: otpContainerWidth, //animated
                                                marginTop: otpContainerMarginTop, //animated
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
                                                    fontSize: 20
                                                }}
                                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                                onCodeFilled={code => this.handleOtpChange(code)}
                                            />
                                        </Animated.View>

                                        {/* Social Login Container */}
                                        <SocialLogin
                                            loginSectionSocialOpacity={this.loginSectionSocialOpacity}
                                            socialLoginContainerOpacity={socialLoginContainerOpacity}
                                        />

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
                                            style={[styles.signUpInput, { marginTop: 30 }]}
                                        >
                                            <TextInput
                                                ref="textInputName"
                                                style={{ flex: 1, fontSize: 20 }}
                                                placeholder="Name"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                        <View
                                            style={styles.signUpInput}
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
                                            style={styles.signUpInput}
                                        >
                                            <TextInput
                                                ref="textInputEmail"
                                                style={{ flex: 1, fontSize: 20 }}
                                                placeholder="Email"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                        <View
                                            style={styles.signUpInput}
                                        >
                                            <TextInput
                                                ref="textInputClass"
                                                style={{ flex: 1, fontSize: 20 }}
                                                placeholder="Class"
                                                underlineColorAndroid="transparent"
                                            />
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('carrerDropDown')}
                                        >
                                            <Transition shared="careerdropDownlist">
                                                <View
                                                    pointerEvents={this.state.loginPointerEvents}
                                                    style={{
                                                        flexDirection: 'row',
                                                        marginHorizontal: 30,
                                                        alignSelf: 'center',
                                                        backgroundColor: 'white',
                                                        padding: 10,
                                                        marginTop: 10,
                                                        width: win.width - 60,
                                                        height: 50,
                                                    }}
                                                >
                                                    <Transition shared="careerPreference">
                                                        <Text style={{ position: 'absolute', top: 0, fontSize: 20, color: 'rgba(0,0,200,0)' }}>CarrerDropDown</Text>
                                                    </Transition>
                                                    <Transition shared="chosenCareerPreference" >
                                                        <Text style={{ position: 'absolute', top: 0, fontSize: 20, color: 'rgba(0,0,189,1)' }}>ChosenCarrerDropDown</Text>
                                                    </Transition>

                                                </View>
                                            </Transition>
                                        </TouchableOpacity>

                                        <Animated.View>

                                            <Animated.View
                                                style={{
                                                    marginTop: 40,
                                                }}
                                            >
                                                <Text style={{ fontSize: 18, fontFamily: 'work-sans-semi-bold', color: colors.primaryDark, alignSelf: 'center' }}>Login with social account</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon style={{ color: colors.primaryDark, marginHorizontal: 15 }} name='logo-google' size={30} />
                                                    <Icon style={{ color: colors.primaryDark, marginHorizontal: 15 }} name='logo-facebook' size={30} />
                                                </View>
                                            </Animated.View>

                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('signUpOtp')}
                                            >
                                                <View style={styles.signUpButton}>
                                                    <Text style={styles.signUpButtonText}>SUBMIT</Text>
                                                </View>
                                            </TouchableOpacity>

                                            <Text style={styles.termsNConditonsText}>To Signup I am accepting <Text style={{ textDecorationLine: 'underline' }}>T&C</Text>.</Text>
                                        </Animated.View>
                                    </Animated.ScrollView>

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
                                        <TouchableOpacity
                                            onPress={() => this.handleForwardArrowPress()}
                                            disabled={this.state.forwardArrowDisabled}
                                        >

                                            <Icon name="md-arrow-forward" style={{ color: 'white', padding: 5 }} />

                                        </TouchableOpacity>

                                    </Animated.View>
                                </View>
                            </Animated.View>
                        </Animated.View>
                    </Content>
                </Container>
            </SafeAreaView>
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
    },
    signUpInput: {
        flexDirection: 'row',
        marginHorizontal: 30,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        height: 50
    },
    signUpButton: {
        marginTop: 30,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginHorizontal: 30,
        width: win.width - 60,
    },
    signUpButtonText: {
        color: 'white',
        fontFamily: 'open-sans-semi-bold',
        fontSize: 18
    },
    termsNConditonsText: {
        color: colors.primaryDark,
        fontFamily: 'work-sans',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 15
    }
}
export default connect(null, { loginWithPhoneNumber })(LoginSignUp);