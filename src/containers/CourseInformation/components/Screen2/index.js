import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    ScrollView,
    Dimensions,
    Image,
    FlatList
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import colors from "../../../../colors";

const win = Dimensions.get('window')

const topPeople = [
    {
        name: 'Nitish Roy',
        image: require('../../images/nitish_roy.png')
    },
    {
        name: 'Sabu Cyril',
        image: require('../../images/sabu_cyril.jpg')
    }
]

class Screen1 extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={styles.title}>
                    Benchmark
                </Text>

                <Text style={styles.description}>
                    Art director is the title for a variety of similar job functions in theater, advertising, marketing, publishing, fashion, film and television, the Internet, and video games. It is the charge of a sole art director to supervise and unify the vision.
                </Text>

                <Text style={styles.topPeopleTitle}>
                    Top Art Directors
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={topPeople}
                    renderItem={({item}) => (
                        <View style={{ height: 160, width: 125, paddingHorizontal: 20, borderRadius: 8 , borderColor: '#E5E5E5', marginTop: 30, marginRight: 20, borderWidth: 1 }}>
                            <Image 
                                source={item.image} 
                                style={{ 
                                    height: 90,
                                    width: 90,
                                    borderRadius: 8,
                                    marginTop: -15
                                }}

                            />
                            <Text style={{ fontFamily: 'work-sans-medium', fontSize: 15, marginTop: 20 }}>
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
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
    title: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40,
        color: colors.secondary,
        marginTop: 24
    },
    description: {
        fontFamily: 'work-sans',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 24
    },
    topPeopleTitle: {
        fontFamily: 'work-sans-medium',
        fontSize: 15,
        color: colors.secondary,
        marginTop: 24,
        marginTop: 35,
    }
}
export default Screen1;