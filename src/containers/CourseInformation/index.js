import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    TouchableNativeFeedback,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from "react-native";
import { 
    Container,
    Content
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const win = Dimensions.get('window')

class CourseInformation extends Component {
    state = {
        index: 0,
        maxIndex: 2
    }
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <View 
                    style={styles.header}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.backButtonContainer}>
                            <Image source={require('../../../assets/icons/back.png')} style={styles.backIcon}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.profileName}>John Walter</Text>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}
                            onPress={() => this.props.navigation.navigate('profile')}
                        >
                            <Image source={require('../../../assets/images/dp.jpeg')} style={styles.profilePic}/>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    horizontal
                    pagingEnabled
                    ref='_scrollView'
                >
                    <Screen1 />
                    <Screen2 />
                    <Screen3 />
                </ScrollView>

                
                <View style={{ backgroundColor: colors.primary, flexDirection: 'row', position: 'absolute', bottom: 0, height: 70, width: win.width }}>
                    <TouchableOpacity style={{ flex: 1}} 
                        onPress={() => { 
                            if(this.state.index > 0) {
                                this.setState({ index: this.state.index - 1 }, () => {
                                    this.refs._scrollView.scrollTo({ x: win.width * this.state.index  })
                                }) 
                            }
                        }} 
                    >
                        <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'flex-start', flex: 1, paddingLeft: 30 }}>
                            <Image source={require('../../../assets/icons/back.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }}/>
                            <Text style={{ marginHorizontal: 10 }}>Previous</Text>                        
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1}} 
                        onPress={() => { 
                            if(this.state.index <  this.state.maxIndex) {
                                this.setState({ index: this.state.index + 1 }, () => {
                                    this.refs._scrollView.scrollTo({ x: win.width * this.state.index })
                                })
                                
                            }
                        }}>
                        <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'flex-end', paddingRight: 30, flex: 1 }}>
                            <Text style={{ marginHorizontal: 10 }}>Next</Text>
                            <Image source={require('../../../assets/icons/next.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}
const styles = {
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(61, 78, 90, 0.3)'
    },
    backButtonContainer: { 
        padding: 10, 
        marginLeft: 15 
    },
    backIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',

    },
    profilePic: {
        height: 40, width: 40,
        borderRadius: 20,
        marginHorizontal: 10
    },
    profileName: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondary,
        marginHorizontal: 10 
    },
}
export default CourseInformation;