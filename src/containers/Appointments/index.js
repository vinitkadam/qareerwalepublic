import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableNativeFeedback,
    Animated, 
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native";
import { 
    Container,
    Content,
    Tabs,
    Tab
} from "native-base";
import colors from '../../colors';
import CurrentAppoinments from './components/CurrentAppoinments';

class Appointments extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}
                    >
                        <View style={{ paddingRight: 5 }}>
                            <Image
                                tintColor="white"  
                                source={require('../../../assets/icons/back.png')} 
                                style={{
                                    height: 24,
                                    width: 24,
                                    resizeMode: 'contain',
                                    marginLeft: 40,
                                    marginTop: 25,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        Appointments
                    </Text>
                </View>
                <Tabs
                    tabBarPosition='top'
                    tabBarUnderlineStyle={{ 
                        backgroundColor: colors.primary,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6, 
                    }}
                    tabContainerStyle={{
                        elevation: 0,
                        backgroundColor: 'white',
                        height: 50
                    }}
                >
                    <Tab
                        heading="Appointments" 
                        tabStyle={{ backgroundColor: colors.secondary}}
                        activeTabStyle={{ backgroundColor: colors.secondary}}
                        textStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'rgba(256,256,256, 0.5)'}}
                        activeTextStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'white' }}
                    >
                        <CurrentAppoinments />
                    </Tab>
                    <Tab heading="History" 
                        tabStyle={{ backgroundColor: colors.secondary }}
                        activeTabStyle={{ backgroundColor: colors.secondary }}
                        textStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal',color: 'rgba(256,256,256, 0.5)'}}
                        activeTextStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'white'}}
                    >
                        <Text>2</Text>
                    </Tab>
                </Tabs>


                {/* <View
                    style={{
                        flexDirection: 'row',
                        height: 30,
                        paddingLeft: 50,
                        backgroundColor: colors.secondary
                    }}
                >
                    <TouchableNativeFeedback
                        onPress={() => this.props.shiftActiveIndicatorToLogin()}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 70, height: 25 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'work-sans-medium' }}>Login</Text>
                    </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this.props.shiftActiveIndicatorToSignUp()}
                        background={TouchableNativeFeedback.SelectableBackground()}
                        disabled={this.props.signUpButtonDisabled}
                    >
                    <Animated.View style={{width: 90, height: 25, opacity: this.props.SignUpButtonOpacity }}>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'work-sans-medium' }}>Sign Up</Text>
                    </Animated.View>
                    </TouchableNativeFeedback>
                </View>

                <View
                    style={{ 
                        backgroundColor: colors.secondary, 
                        width: '100%'           
                    }}
                    
                >
                    <Animated.View
                        style={{ 
                            backgroundColor: colors.primary,
                            height: 3,
                            width: 200, //animated
                            marginLeft: this.props.activeIndicatorMarginLeft, //animated

                        }}
                    />
                </View> */}
            </Container>
        );
    }
}

const styles = {
    header:{
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        height: 60,   
        zIndex: 0,
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'work-sans-medium',
        fontSize: 26,
        flex: 1,
        marginTop: 25,
        marginLeft: 25
    },
}

export default Appointments