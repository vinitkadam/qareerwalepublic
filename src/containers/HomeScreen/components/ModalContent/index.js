import React, { Component } from "react";
import { 
    View,
    Text,
    Dimensions,
    ScrollView
} from "react-native";

const win = Dimensions.get('window')

class ModalContent extends Component {
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
                <ScrollView>
                    <View style={{  padding: 15, marginBottom: 10, borderRadius: 12, borderColor: colors.secondaryLight, borderWidth: 1 }}>
                        <Text>Your DMIT Appointment is booked</Text>
                        <Text>12:00 AM 12th April 2019</Text>
                    </View>
                    <View style={{ padding: 15, marginBottom: 10, borderRadius: 12, borderColor: colors.secondaryLight, borderWidth: 1 }}>
                        <Text>Your DMIT Appointment is booked</Text>
                        <Text>12:00 AM 12th April 2019</Text>
                    </View>
                    <View style={{ padding: 15, marginBottom: 10, borderRadius: 12, borderColor: colors.secondaryLight, borderWidth: 1 }}>
                        <Text>Your DMIT Appointment is booked</Text>
                        <Text>12:00 AM 12th April 2019</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default ModalContent;