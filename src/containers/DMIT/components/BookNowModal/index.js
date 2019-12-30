import React, { Component } from "react";
import { 
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

const win = Dimensions.get('window')


class BookNowModal extends Component {
    render() {
        return (
            <View 
                style={{
                    backgroundColor: 'white', 
                    borderTopLeftRadius: 0, 
                    borderTopRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    padding: 20,
                    marginTop: 40,
                    maxHeight: win.height * 0.6
                }}
            >
                <ScrollView contentContainerStyle={{ justifyContent: 'center'}}>
                    <Text>DMIT</Text>
                    <Text>Rs. 240</Text>
                    <Text>date</Text>
                    <Text>address</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigationProps.navigate('appointmentConfirmed')
                            
                        }}
                    >
                        <Transition shared="greenBackground">
                            <View style={{ backgroundColor: 'rgba(125, 213, 180, 0.3)', height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: '#4AA583' }}>BOOK NOW</Text>
                            </View>
                        </Transition>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
export default BookNowModal;