import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { 
    Container,
    Content,
    Icon,
} from "native-base";
import { FlatList } from "react-native-gesture-handler";
import colors from "../../../../colors";

const data = [
    {
        AppointmentName: 'DMIT',
        date: '12th May 2019',
        agentName: 'Davids Kokainis',
        agentDesc: 'M.PHD',
        imageUrl: 'https://www.wakehealth.edu/-/media/WakeForest/Global/System/Person-Images/n/Nicholas-M-Pajewski.jpg'
    },
    {
        AppointmentName: 'DMIT',
        date: '12th May 2019',
        agentName: 'Davids Kokainis',
        agentDesc: 'M.PHD',
        imageUrl: 'https://www.wakehealth.edu/-/media/WakeForest/Global/System/Person-Images/n/Nicholas-M-Pajewski.jpg'
    }
]

class CurrentAppoinments extends Component {
    render() {
        return (
            <FlatList
                contentContainerStyle={{
                    paddingTop: 40
                }}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <View style={styles.container} >
                        <Text style={styles.title}>{item.AppointmentName}</Text>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Icon name="md-calendar" style={styles.dateIcon}/>
                        </View>
                        <View style={styles.agentContainer}>
                            <Image source={{ uri: item.imageUrl}} style={styles.image}/>
                            <View style={styles.agentBodyTextContainer}>
                                <Text style={styles.agentName}>{item.agentName}</Text>
                                <Text style={styles.agentDesc} numberOfLines={2}>{item.agentDesc}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.payNowButton}>
                                <Text style={ styles.payNowButtonText }>Pay Now</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cancelButton}>
                                <Text style={ styles.cancelButtonText }>Pay Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        );
    }
}

const styles = {
    container: { 
        padding: 30,
        borderRadius: 16, 
        borderWidth: 1, 
        borderColor: colors.secondaryLight,
        marginHorizontal: 35,
        marginBottom: 20
    },
    title: {
        fontFamily: 'work-sans-medium',
        fontSize: 17,
        color: colors.green
    },
    dateContainer: {
        marginTop: 25,
        flexDirection: 'row'
    },
    dateText: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        flex: 1,
        color: colors.secondary
    },
    dateIcon: { 
        fontSize: 24, 
        color: colors.secondary 
    },
    payNowButton: {
        marginTop: 50,
        backgroundColor: colors.lightGreen,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    payNowButtonText: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        color: colors.green
    },
    cancelButton: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    cancelButtonText: {
        fontFamily: 'work-sans-medium',
        fontSize: 16,
        color: colors.red
    },
    agentContainer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    image: {
        height: 38,
        width: 38,
        borderRadius: 19,
    },
    agentBodyTextContainer: {
        marginLeft: 10,
        flex: 1
    },
    agentName: {
        fontFamily: 'work-sans-medium',
        fontSize: 17,
        color: colors.secondary
    },
    agentDesc: {
        fontFamily: 'work-sans-medium',
        fontSize: 15,
        color: colors.secondary
    }


}
export default CurrentAppoinments;