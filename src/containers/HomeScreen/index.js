import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    Button,
    TouchableWithoutFeedback
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
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import ModalContent from "./components/ModalContent";

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

const win = Dimensions.get('window')

class HomeScreen extends Component {

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>

                <Modal
                    isVisible={this.state.isModalVisible}
                    backdropColor="rgba(0,0,0,0.3)"
                    backdropOpacity={0.8}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    onBackdropPress={this.toggleModal}
                    style={{
                        justifyContent: "flex-start"
                    }}
                >
                    <ModalContent />
                </Modal>

                <View
                    style={styles.header}
                >
                    <TouchableOpacity
                        onPress={this.toggleModal}
                    >
                        <Transition appear='left' disappear='left'>
                            <View style={styles.bellIconContainer}>
                                <Image source={require('../../../assets/icons/notifications.png')} style={styles.bellIcon} />
                            </View>
                        </Transition>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.profileName}>John Walter</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('profile')}
                        >
                            <Transition shared="dp">
                                <Image source={require('../../../assets/images/dp.jpeg')} style={styles.profilePic} />
                            </Transition>
                        </TouchableOpacity>

                    </View>
                </View>
                <ScrollView
                    ref='_contentScrollView'
                >
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.heading}>Qareerwale</Text>
                        <Text style={styles.text1}>Find a career You’ll truly love</Text>

                        {/* grid of 4  */}
                        <Row style={{ marginTop: 20, }}>
                            <Col>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('dmit')}
                                >
                                    <Transition shared='dmittest'>
                                        <View style={[styles.gridBox, { backgroundColor: 'rgba(125, 213, 180, 0.3)' }]}>
                                            <Transition shared='dmiticon'>
                                                <Ionicons name="md-finger-print" style={[styles.gridBoxIcons, { color: '#4AA583' },]} />
                                            </Transition>
                                            <Transition shared="dmittext">
                                                <Text style={[styles.gridBoxTitle, { color: '#4AA583' }]}>DMIT</Text>
                                            </Transition>
                                        </View>
                                    </Transition>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(255, 161, 151, 0.3)', marginLeft: 10 }]}>
                                    <MaterialCommunityIcons name="test-tube" style={[styles.gridBoxIcons, { color: '#DE6A5E' },]} />
                                    <Text style={[styles.gridBoxTitle, { color: '#DE6A5E' }]}>Medical Test</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(255, 220, 103, 0.3)' }]}>
                                    <MaterialCommunityIcons name="react" style={[styles.gridBoxIcons, { color: '#FFDC67' },]} />
                                    <Text style={[styles.gridBoxTitle, { color: '#FFDC67' }]}>IQ</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={[styles.gridBox, { backgroundColor: 'rgba(0, 193, 210, 0.3)', marginLeft: 10 }]}>
                                    <MaterialCommunityIcons name="brain" style={[styles.gridBoxIcons, { color: '#00C1D2' },]} />
                                    <Text style={[styles.gridBoxTitle, { color: '#00C1D2' }]}>Neurological Test</Text>
                                </View>
                            </Col>
                        </Row>
                        {/* <TouchableOpacity onPress={() => { this.refs._contentScrollView.scrollTo({ y: win.height - 60 }); }}>
                            <Text>button</Text>
                        </TouchableOpacity> */}
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
                                marginTop: win.height > 554 ? win.height - 628 : 0
                            }}
                        >
                            <Tab

                                heading="Trending Courses"
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                textStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'rgba(61, 78, 90,0.3)' }}
                                activeTextStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'rgba(61, 78, 90,1)' }}
                            >
                                <TrendingCourses
                                    navigationProps={this.props.navigation}
                                    data={trendingCourses}
                                />
                            </Tab>
                            <Tab heading="Popular Courses"
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                textStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'rgba(61, 78, 90,0.3)' }}
                                activeTextStyle={{ fontFamily: 'work-sans-semi-bold', fontWeight: 'normal', color: 'rgba(61, 78, 90,1)' }}
                            >
                                <TrendingCourses
                                    data={trendingCourses}
                                />
                            </Tab>
                        </Tabs>

                    </View>
                </ScrollView>
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
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    profileName: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondary,
        marginHorizontal: 10
    },
    heading: {
        height: 23, //20
        marginTop: 20,
        fontFamily: 'work-sans-medium',
        fontSize: 21, //18
        color: colors.primary
    },
    text1: {
        marginTop: 15,
        color: colors.secondary,
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40, //24
        height: 96, //84 //52
    },
    gridBox: {
        height: 150,
        marginTop: 10,
        borderRadius: 15,
        padding: 20,
    },
    gridBoxIcons: {
        fontSize: 60,
        alignSelf: 'center',
        marginTop: 10,
        transform: [
            {
                scale: 1
            }
        ]
    },
    gridBoxTitle: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        marginTop: 15
    },
}
export default HomeScreen;