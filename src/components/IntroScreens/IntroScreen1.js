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

class IntroScreen1 extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.heading}>Qareerwale</Text>
            </Container>
        );
    }
}

const styles = {
    heading: {
        fontStyle: 'work-sans-medium',
        fontSize: 40,
        color: '#FFDC67'
    }
}
export default IntroScreen1;