import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native";
import {
    Container,
    Content,
    Right
} from "native-base";
import colors from "../../colors";
import ListItem from './components/ListItem'
import { Transition } from "react-navigation-fluid-transitions";

class Profile extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Content>
                    {/* Header start */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}
                        >
                            <View style={{ paddingRight: 5 }}>
                                <Image
                                    source={require('../../../assets/icons/Profile/back.png')}
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
                        <TouchableOpacity
                        >
                            <View style={styles.editButton}>
                                <Image
                                    source={require('../../../assets/icons/Profile/edit.png')}
                                    style={{
                                        height: 14,
                                        width: 14,
                                        resizeMode: 'contain',
                                        marginLeft: 14,
                                    }}
                                />
                                <Text style={{
                                    fontFamily: 'work-sans-medium',
                                    fontSize: 11,
                                    marginLeft: 4,
                                    marginRight: 20
                                }}>
                                    Edit Profile
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Header end */}

                    {/* DP */}
                    <TouchableOpacity>
                        <View style={{
                            marginLeft: 75,
                            marginTop: -55,
                            borderRadius: 65,
                        }}>
                            <Transition shared="dp">
                                <Image
                                    source={require('../../../assets/images/dp.jpeg')}
                                    style={styles.dp}
                                />
                            </Transition>
                        </View>
                    </TouchableOpacity>
                    {/* <Transition shared="profileName"> */}
                    <Text style={styles.name}>
                        John Walter
                        </Text>
                    {/* </Transition> */}
                    <Text style={styles.bio}>
                        Experienced User Interface Designer with a demonstrated history of working in the computer software industry.
                    </Text>

                    <ListItem
                        icon={require('../../../assets/icons/Profile/business.png')}
                        bodyText='Career'
                        rightText='Art Director'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/school.png')}
                        bodyText='Education'
                        rightText='Diploma in Fine Arts'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/location.png')}
                        bodyText='Location'
                        rightText='Mumbai'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/location.png')}
                        bodyText='Appoinments'
                        onPress={() => this.props.navigation.navigate('appointments')}
                        disabled={false}
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/email.png')}
                        bodyText='Social Accounts'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/multilineChart.png')}
                        bodyText='Activity & Insights'
                    // rightText='Art Director'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/refer.png')}
                        bodyText='Refer & Earn'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/support.png')}
                        bodyText='Support'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/helpFeedback.png')}
                        bodyText='Help & Feedback'
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/reqFeature.png')}
                        bodyText='Request a Feature'
                        onPress={() => this.props.navigation.navigate('requestFeature')}
                        disabled={false}
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/location.png')}
                        bodyText='About Qareerwale'
                        onPress={() => this.props.navigation.navigate('about')}
                        disabled={false}
                    />
                    <ListItem
                        icon={require('../../../assets/icons/Profile/logout.png')}
                        bodyText='Logout'
                    />

                </Content>
            </Container>
        );
    }
}

const styles = {
    header: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 110,
        zIndex: 0,
    },
    editButton: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        height: 28,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        marginTop: 17,
        alignItems: 'center'
    },
    dp: {
        height: 130,
        width: 130,
        borderRadius: 65
    },
    name: {
        fontFamily: 'work-sans-medium',
        marginLeft: 75,
        marginTop: 10,
        fontSize: 26,
        color: colors.secondary,
    },
    bio: {
        fontFamily: 'work-sans-medium',
        fontSize: 15,
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 25
    },

}
export default Profile;