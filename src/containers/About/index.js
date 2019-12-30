import React, { Component } from "react";
import { 
    View,
    StatusBar,
    Image,
    TouchableOpacity
} from "react-native";
import { 
    Container,
    Content,
    Text
} from "native-base";
import colors from "../../colors";

class About extends Component {
    render() {
        return (
            <Container style={{ marginTop: StatusBar.currentHeight}}>
                <Content>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}
                        >
                            <View style={{ paddingRight: 5 }}>
                                <Image
                                    tintColor="white"  
                                    source={require('../../../assets/icons/back.png')} 
                                    style={{
                                        height: 24,
                                        width: 24,
                                        resizeMode: 'contain',
                                        marginLeft: 40,
                                        marginTop: 25,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>
                            About Qareerwale
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        Qareerwale
                    </Text>
                    <Text style={styles.aboutText}>
                        Lorem ipsum dolor sit amet, cum vivendo mandamus ut. Nam ea sumo tempor regione, prima forensibus reformidans ea vix. Fabellas sapientem ea mea, an tractatos adolescens disputationi sed. Has ne accusam albucius maluisset, his ad ornatus civibus. Usu posse elitr at, an etiam putent civibus nec, dolorum eleifend platonem sed in. Eos aeterno discere apeirian et, sed labores nonumes te. Id justo nonumes necessitatibus sit. Iuvaret eligendi tacimates qui ne, ad eleifend theophrastus mei. Ex elitr euismod qui. Sit eros mentitum temporibus an, ne ius phaedrum deseruisse eloquentiam. Id dictas maiorum ius, in his dicit partem ocurreret. Id mandamus corrumpit eos, eu ignota sapientem constituto mei. Nec case accusam eu, eum id wisi delenit lobortis. Est an tollit eruditi similique. Semper principes id has. Autem noster fabellas id mea, nostrud volumus expetendis in mea. Ea eam assum oratio putant, eum clita dolores disputando ut, an dicit maiorum apeirian eos. Et tale dolor gloriatur his, munere causae prompta mel cu, ea vix probo affert officiis. Ad sit veritus verterem detraxit. Vim volumus voluptatum intellegebat no, malis dolor inciderint usu eu, ea denique dissentias sea. Odio corpora evertitur eam te, at eam habeo eripuit efficiantur, pri ad iudico virtute deleniti. Tantas sapientem assueverit eam cu. Quo porro nusquam cu, habeo menandri eam cu. Mei at veri erroribus, ex pri paulo decore nominavi. Dolorum antiopam euripidis eum no, habeo solet democritum per cu, no nam porro eripuit.
                    </Text>
                </Content>
            </Container>
        );
    }
}

const styles = {
    header:{
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        height: 110,   
        zIndex: 0,
    },
    headerTitle: {
        color: 'white',
        fontFamily: 'work-sans-medium',
        fontSize: 26,
        flex: 1,
        marginTop: 25,
        marginLeft: 25
    },
    title: {
        color: colors.secondary,
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40,
        marginTop: 30,
        marginHorizontal: 40,
    },
    aboutText: {
        color: colors.secondary,
        fontFamily: 'work-sans',
        fontSize: 15,
        marginTop: 25,
        textAlign: 'justify',
        marginHorizontal: 40,
    }
}

export default About;