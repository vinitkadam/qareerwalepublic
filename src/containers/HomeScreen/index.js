import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    TouchableNativeFeedback,
    Image,
    TouchableOpacity
} from "react-native";
import { 
    Container,
    Content,
    Icon,
    Row,
    Col,
    Tabs,
    Tab,
} from "native-base";

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TrendingCourses from "./components/TrendingCourses";
import { Transition } from "react-navigation-fluid-transitions";
import colors from "../../colors";

const trendingCourses = [
    {
        name: 'Web Design From Scratch To Pro',
    },
    {
        name: 'Mobile Design From Scratch To Pro',
    },
    {
        name: 'The Complete React Native And Redux Course  ',
    }
]

class HomeScreen extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <View 
                    style={styles.header}
                >
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackground()}
                    >
                        <View style={styles.bellIconContainer}>
                            <Image source={require('../../../assets/icons/notifications.png')} style={styles.bellIcon}/>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.profileName}>John Walter</Text>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}
                        >
                            <Image source={require('./images/dp.jpeg')} style={styles.profilePic}/>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <Content>
                    <View style={{ paddingHorizontal: 20}}>
                        <Text style={styles.heading}>Qareerwale</Text>
                        <Text style={styles.text1}>Find a career You’ll truly love</Text>
                        
                        {/* grid of 4  */}
                        <Row style={{ marginTop: 20,}}>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(125, 213, 180, 0.3)'}]}>
                                    <Ionicons name="md-finger-print" style={[styles.gridBoxIcons, { color: '#4AA583' }, ]} />
                                    <Text style={[styles.gridBoxTitle,{ color: '#4AA583'}]}>DMIT</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(255, 161, 151, 0.3)', marginLeft: 10 }]}>
                                    <MaterialCommunityIcons name="test-tube" style={[styles.gridBoxIcons, { color: '#DE6A5E' }, ]} />
                                    <Text style={[styles.gridBoxTitle,{ color: '#DE6A5E'}]}>Medical Test</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(255, 220, 103, 0.3)'}]}>
                                    <MaterialCommunityIcons name="react" style={[styles.gridBoxIcons, { color: '#FFDC67' }, ]} />
                                    <Text style={[styles.gridBoxTitle,{ color: '#FFDC67'}]}>IQ</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(0, 193, 210, 0.3)', marginLeft: 10 }]}>
                                    <MaterialCommunityIcons name="brain" style={[styles.gridBoxIcons, { color: '#00C1D2' }, ]} />
                                    <Text style={[styles.gridBoxTitle,{ color: '#00C1D2'}]}>Neurological Test</Text>
                                </View>
                            </Col>
                        </Row>
                    
                    <Tabs
                        locked
                        tabBarPosition='top'
                        tabBarUnderlineStyle={{
                            backgroundColor: colors.primary,
                            borderTopLeftRadius: 3,
                            borderTopRightRadius: 3,
                            marginBottom: -1, 
                        }}
                        tabContainerStyle={{
                            elevation: 0,
                            backgroundColor: 'white',
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(61, 78, 90,0.2)',

                        }}
                    >
                        <Tab 
                            heading="Trending Courses" 
                            tabStyle={{ backgroundColor: 'white'}}
                            activeTabStyle={{ backgroundColor: 'white'}}
                            textStyle={{ fontFamily: 'work-sans-semi-bold', color: 'rgba(61, 78, 90,0.3)'}}
                            activeTextStyle={{ fontFamily: 'work-sans-semi-bold', color: 'rgba(61, 78, 90,1)'}}
                        >
                            <TrendingCourses 
                                data={trendingCourses}
                            />
                        </Tab>
                        <Tab heading="Popular Courses" 
                            tabStyle={{ backgroundColor: 'white'}}
                            activeTabStyle={{ backgroundColor: 'white'}}
                            textStyle={{ fontFamily: 'work-sans-semi-bold', color: 'rgba(61, 78, 90,0.3)'}}
                            activeTextStyle={{ fontFamily: 'work-sans-semi-bold', color: 'rgba(61, 78, 90,1)'}}
                        >
                            <TrendingCourses 
                                data={trendingCourses}
                            />
                        </Tab>
                    </Tabs>
                    
</View>
                </Content>
            </Container>
        );
    }
}

const styles = {
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(61, 78, 90, 0.3)'
    },
    bellIconContainer: { 
        padding: 10, 
        marginLeft: 15 
    },
    bellIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',

    },
    profilePic: {
        height: 40, width: 40,
        borderRadius: 20,
        marginHorizontal: 10
    },
    profileName: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondary,
        marginHorizontal: 10 
    },
    heading: {
        marginTop: 20,
        fontFamily: 'work-sans-medium',
        fontSize: 18,
        color: colors.primary
    },
    text1: {
        marginTop: 15,
        color: colors.secondary,
        fontFamily: 'work-sans-semi-bold',
        fontSize: 24,
    },
    gridBox: {
        height: 150,
        marginTop: 10,
        borderRadius: 15,
        padding: 20,
    },
    gridBoxIcons: {
        height: 60,
        width: 60,
        fontSize: 60,
        alignSelf: 'center',
        marginTop: 10,
    },
    gridBoxTitle: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        marginTop: 15
    },
}
export default HomeScreen;