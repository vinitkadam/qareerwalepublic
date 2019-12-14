import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    FlatList,
    Image
} from "react-native";
import { Card } from "native-base";


class TrendingCourses extends Component {
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({item}) =>

                <Card style={{ borderRadius: 8, marginTop: 10, elevation: 1 }}>
                    <View 
                            style={{ 
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10
                            }}
                        >
                            <View
                                style={{ alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 15, padding: 5, borderBottomRightRadius: 15, backgroundColor: '#6796FF'}}
                            >
                                <Text style={{ fontFamily: 'work-sans', fontSize: 10, color: 'white' }}>Trending Courses</Text>
                            </View>
                            <Text style={{  paddingHorizontal: 20, fontFamily: 'work-sans-medium', fontSize: 14, color: 'rgba(61, 78, 90,1)' }}>
                                Skill Box
                            </Text>
                        </View>
                        
                        <View 
                            style={{ 
                                marginHorizontal: 20
                            }}
                        >
                            <Text style={styles.title}>
                                {item.name}
                            </Text>
                            <Image source={require('../../images/trendingImage.jpg')} style={styles.image}/>
                        </View>


                </Card>
                }
            />

        );
    }
}

const styles = {
    container: {
        width: '100%',
        margin: 5,
        // borderWidth: 1,
        // borderColor: 'rgba(61, 78, 90,0.3)',
        borderRadius: 6,
        elevation: 2,
        marginVertical: 15,
    },
    title: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 24,
        color: 'rgba(61, 78, 90,1)',
        marginTop: 15,
    },
    image: {
        width: '100%',
        height: 170,
        marginTop: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        resizeMode: 'cover'
    }
}
export default TrendingCourses;