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
import { Ionicons } from '@expo/vector-icons';

class DMIT extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Transition shared='dmittest' >
                    <View style={[styles.gridBox, { backgroundColor: 'rgba(125, 213, 180, 0.3)'}]}>
                        <Ionicons name="md-finger-print" style={[styles.gridBoxIcons, { color: '#4AA583' }, ]} />
                        <Text style={[styles.gridBoxTitle,{ color: '#4AA583'}]}>DMIT</Text>
                    </View>
                </Transition>
            </Container>
        );
    }
}

const styles = {
    gridBox: {
        height: 150,
        marginTop: 10,
        borderRadius: 15,
        padding: 20,
        width: '90%'
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
export default DMIT;