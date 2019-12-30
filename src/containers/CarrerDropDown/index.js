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
import colors from "../../colors";
import { Transition } from "react-navigation-fluid-transitions";

class CarrerDropDown extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight, backgroundColor: colors.primary }}>
                <Transition shared="careerdropDownlist">
                    <View style={{ flex: 1, margin: 20, backgroundColor: 'white',}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Transition shared="careerPreference">
                                <Text style={{ position: 'absolute', top: 10, color: 'rgba(0,89,0,1)' }}>CarrerDropDown</Text>
                            </Transition>
                            <Transition shared="chosenCareerPreference">
                                <Text style={{ position: 'absolute', top: 10, color: 'rgba(0,0,0,0)' }}>ChosenCarrerDropDown</Text>
                            </Transition>
                        </View>
                    </View>
                </Transition>
            </Container>
        );
    }
}
export default CarrerDropDown;