import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    Image,
    TouchableNativeFeedback,
    TouchableOpacity
} from "react-native";
import { 
    Container,
    Content,
    ListItem,
    Left,
    Body,
    Right
} from "native-base";

import colors from "../../../../colors";

const TouchableListItem = (props) => (
    <ListItem {...props}>
        {this.children}
    </ListItem>
)

const NonTouchableListItem = (props) => (
    <ListItem {...props}>
        {this.children}
    </ListItem>
)

class CustomListItem extends Component {
    render() {
        return (
                <ListItem button androidRippleColor={colors.secondaryLight} disabled={ this.props.disabled === false ? this.props.disabled : true} icon onPress={() => this.props.onPress ? this.props.onPress() : null }>
                    <Left>
                        <Image 
                            source={this.props.icon}
                            style={styles.listIcon}
                        />
                    </Left>
                    <Body>
                        <Text style={styles.listBodyText}>
                            {this.props.bodyText}
                        </Text>
                    </Body>
                    <Right>
                        <Text style={styles.listRightText}>
                            {this.props.rightText || ""}
                        </Text>
                    </Right>
                </ListItem>

                // <TouchableNativeFeedback>
                //     <View style={{ flexDirection: 'row', flex: 1, height: 50, alignItems: 'center' }}>
                //             <Image 
                //                 source={this.props.icon}
                //                 style={styles.listIcon}
                //             />
                //         <View style={{ flex: 1, borderColor: colors.secondaryLight, borderWidth: 1, height: 50, justifyContent: 'center'}}>
                //             <Text style={styles.listBodyText}>
                //                 {this.props.bodyText}
                //             </Text>
                //         </View>
                //         <View style={{ flex: 1, alignItems: 'flex-end', borderColor: colors.secondaryLight, borderWidth: 1, height: 50, justifyContent: 'center' }}>
                //             <Text style={styles.listRightText}>
                //                 {this.props.rightText || ""}
                //             </Text>
                //         </View>
                //     </View>
                // </TouchableNativeFeedback>

        );
    }
}

const styles = {
    listIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        // marginLeft: 15,
        // marginRight: 10,
    },
    listBodyText: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondary,
        marginLeft: 15,
    },
    listRightText: {
        fontFamily: 'work-sans-medium',
        fontSize: 14,
        color: colors.secondaryLight,
        // paddingRight: 15,
    },
}
export default CustomListItem;