import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar
} from "react-native";
import { 
    Container,
    Content
} from "native-base";

class IntroScreen2 extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.heading}>Qareerwale</Text>
                <Text style={styles.text1}>Find a career You’ll truly love</Text>
                <Text style={styles.text2}>Where would you like to be in 10 years?</Text>
            </Container>
        );
    }
}

const styles = {
    heading: {
        fontStyle: 'work-sans-medium',
        fontSize: 20,
        color: '#FFDC67'
    },

}
export default IntroScreen2;