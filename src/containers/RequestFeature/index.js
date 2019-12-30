import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    Animated,
    Platform
} from "react-native";
import {
    Container,
    Content,
    Input,
    Item,
    Label,
    Form
} from "native-base";
import colors from "../../colors";

class RequestFeature extends Component {

    state = {
        contentMarginBottom: 0
    }

    componentWillMount() {

        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)

        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(10)
    }

    keyboardWillShow = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        }
        else {
            duration = event.duration
        }

        this.setState({ contentMarginBottom: event.endCoordinates.height + 5 })
    }

    keyboardWillHide = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        }
        else {
            duration = event.duration
        }

        this.setState({ contentMarginBottom: 0 })
    }

    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight }}>
                <Content style={{ marginBottom: this.state.contentMarginBottom }}>
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
                            Request a Feature
                        </Text>
                    </View>

                    <Form style={{ marginHorizontal: 30 }}>
                        <Item style={styles.formItem}>
                            {/* <Label style={styles.label}>Username</Label> */}
                            <Input style={styles.input} placeholder='Write a Problem here' placeholderTextColor={colors.secondary} />
                        </Item>
                        <Item style={styles.formItem}>
                            {/* <Label style={styles.label}>Password</Label> */}
                            <Input multiline style={styles.input} placeholder='Tell us about your Idea' placeholderTextColor={colors.secondaryLight} />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = {
    header: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        height: 110,
        zIndex: 0,
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'work-sans-medium',
        fontSize: 26,
        flex: 1,
        marginTop: 25,
        marginLeft: 25,
    },
    input: {
        fontFamily: 'work-sans-medium',
        fontSize: 17,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    formItem: {
        marginTop: 30
    }
}
export default RequestFeature;