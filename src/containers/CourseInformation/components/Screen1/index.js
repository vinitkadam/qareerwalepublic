import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    ScrollView,
     Dimensions
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import colors from "../../../../colors";

const win = Dimensions.get('window')

class Screen1 extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.categoryText}>
                    Arts, Design, Entertainment, Sports, and Media Occupations
                </Text>

                <Text style={styles.courseName}>
                    Art Director
                </Text>

                <Text style={styles.description}>
                    Art director is the title for a variety of similar job functions in theater, advertising, marketing, publishing, fashion, film and television, the Internet, and video games. It is the charge of a sole art director to supervise and unify the vision.
                </Text>

                {/* Supply demand graph */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: colors.primary, height: 40, flex: 3, marginRight: 10, borderRadius: 4, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 15, fontFamily: 'work-sans-medium', fontSize: 11, color: colors.primaryDark }}>Supply</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#A8B6BF', borderRadius: 4, height: 40 }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ backgroundColor: colors.primary, height: 40, flex: 1, borderRadius: 4, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 15, fontFamily: 'work-sans-medium', fontSize: 11, color: colors.primaryDark }}>Demand</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        width: win.width,
        paddingHorizontal: 40,
        paddingBottom: 70
    },
    categoryText: {
        fontFamily: 'work-sans-medium',
        fontSize: 11,
        color: colors.secondary,
        marginTop: 30,
    },
    courseName: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40,
        color: colors.secondary,
        marginTop: 24
    },
    description: {
        fontFamily: 'work-sans',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 24,
        marginBottom: 50
    }
}
export default Screen1;