import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from "react-native";
import {
    Container,
    Content,
    DatePicker
} from "native-base";
import MapView from 'react-native-maps';
import { Transition } from "react-navigation-fluid-transitions";
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons';
import colors from "../../colors";
import BookNowModal from "./components/BookNowModal";
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';

export default class DMIT extends Component {
    state = {
        chosenDate: new Date(),
        region: null,
        isModalVisible: false
    }

    componentDidMount() {
        setTimeout(
            () => this._getLocationAsync(),
            1000
        )
    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted')
            console.log('Permission to access location was denied.')

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });


        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
        }
        console.log(region)

        this.setState({ region: region })
    }

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
                    <BookNowModal
                        navigationProps={this.props.navigation}
                        hideModal={() => this.setState({ isModalVisible: false })}
                    />
                </Modal>

                {/* header start */}
                <View
                    style={styles.header}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Transition appear='scale' disappear='scale'>
                            <View style={styles.bellIconContainer}>
                                <Image source={require('../../../assets/icons/back.png')} style={styles.bellIcon} />
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
                {/* header end */}


                <Content style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                    <Transition appear='horizontal'>
                        <Text style={styles.title}>Book Appointment</Text>
                    </Transition>

                    <Transition shared='dmittest' >
                        <View style={[styles.gridBox, { backgroundColor: 'rgba(125, 213, 180, 0.3)' }]}>

                            <Transition shared="dmiticon">
                                <Ionicons name="md-finger-print" style={[styles.gridBoxIcons, { color: '#4AA583' },]} />
                            </Transition>
                            <Transition shared="dmittext">
                                <Text style={[styles.gridBoxTitle, { color: '#4AA583' }]}>DMIT</Text>
                            </Transition>
                        </View>
                    </Transition>

                    <Text style={styles.subTitle}>Select Appointment Date and Location</Text>

                    <View style={styles.dateContainer}>
                        <View style={{ flex: 1 }}>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: colors.secondary }}
                                placeHolderTextStyle={{ color: colors.secondaryLight }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </View>
                        <View>
                            <Image style={{ height: 25, width: 25, resizeMode: 'contain', }} source={require('../../../assets/icons/calender.png')} />
                        </View>

                    </View>
                    <View style={{ marginVertical: 20, height: 300, borderRadius: 16, borderColor: colors.lightSecondaryBorderColor, borderWidth: 1 }}>
                        <MapView
                            showsUserLocation={true}
                            style={{ flex: 1, overflow: 'hidden', borderRadius: 16 }}
                            initialRegion={this.state.region}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.toggleModal}
                    >
                        <View style={{ borderRadius: 10, backgroundColor: 'rgba(125, 213, 180, 0.3)', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#4AA583' }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
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
        marginHorizontal: 10,
        zIndex: 100
    },
    profileName: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondary,
        marginHorizontal: 10
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
        scale: 1.5
    },
    gridBoxTitle: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        marginTop: 15,
    },
    title: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40,
        color: colors.secondary,
        marginTop: 30,
        marginBottom: 25,
        marginHorizontal: 20
    },
    subTitle: {
        fontFamily: 'work-sans',
        fontSize: 12,
        color: colors.secondary,
        marginTop: 25,
        marginBottom: 15,
    },
    dateContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        borderColor: colors.lightSecondaryBorderColor,
        borderWidth: 1,
        paddingHorizontal: 10,
    }
}