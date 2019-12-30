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
import { Transition } from "react-navigation-fluid-transitions";

class AppointmentConfirmed extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Transition shared="greenBackground">
                    <View style={{ backgroundColor: 'rgba(125, 213, 180, 0.3)', flex: 1 }}>

                    </View>
                </Transition>
            </Container>
        );
    }
}
export default AppointmentConfirmed;