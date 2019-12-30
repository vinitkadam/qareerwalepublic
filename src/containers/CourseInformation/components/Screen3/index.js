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
    Content,
    Card
} from "native-base";
import Carousel from 'react-native-snap-carousel';
import colors from "../../../../colors";
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';

const win = Dimensions.get('window')
const SLIDER_1_FIRST_ITEM = 0;

dummyData = [
    {
        courseName: "Bachelor's Degree in Graphic Design",
        courseDesc: "Often considered a requirement to enter into this field, those interested in a career as an art director typically begin their educations by pursing a Bachelor of Arts or a Bachelor of Fine Arts degree in graphic design. Because these interdisciplinary programs emphasize basic and advanced art skills, such as drawing and color theory, as well as digital media, design programs and Web development, they are ideally suited to emphasize the skills necessary for art directors. Students actively develop professional portfolios throughout their undergraduate careers. Students earning a bachelor’s degree in graphic design will typically complete around 65 hours of coursework. Typical coursework for graphic design programs include: • Drawing • Color theory • History of graphic design • Typography • Production design • Electronic media and production",
        colleges: [
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
        ]
    },
    {
        courseName: "Master’s Degree in Art Administration",
        courseDesc: "Students who wish to pursue a master’s degree in art administration will typically earn a Master of Science in Art Administration or a Master of Art in Art Administration. Students acquire skills in areas such as management practice,",
        colleges: [
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
            {
                name: "L S Raheja College of Arts",
                collegeImage: "http://www.lsraheja.org/images/logo.png",
                address: "Corporation Bank, STY Relief Rd, Santacruz, Mumbai, Shastri Nagar, Juhu, Mumbai, Maharashtra 400054",
                website: "http://www.lsraheja.org/",
                directions: "",
                call: ""
            },
        ]
    }
]

const formattedData = dummyData.map((item) => {
    return [
        {
            courseName: item.courseName,
            courseDesc: item.courseDesc
        },
        ...item.colleges
    ]
})

class Screen3 extends Component {

    state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    }

    renderItemWithoutParallax({ item, index }) {
        return (
            <SliderEntry
                data={item}
            />
        );
    }

    render() {
        console.log('formattedData', formattedData)
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>
                    Courses & College
                </Text>

                <FlatList 
                    data={formattedData}
                    renderItem={({ item }) => {
                        return (

                            <Carousel
                                // ref={c => this.slider1Ref = c}
                                data={item}
                                renderItem={this.renderItemWithoutParallax}
                                sliderWidth={sliderWidth}
                                itemWidth={itemWidth}
                                firstItem={SLIDER_1_FIRST_ITEM}
                                inactiveSlideScale={1}
                                inactiveSlideOpacity={1}
                                // inactiveSlideShift={20}
                                containerCustomStyle={styles.slider}
                                contentContainerCustomStyle={styles.sliderContentContainer}
                                loopClonesPerSide={2}
                                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                            />
                    )}}
                />
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        width: win.width,
        paddingBottom: 70
    },
    title: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 40,
        color: colors.secondary,
        marginTop: 24,
        marginHorizontal: 40
    },
    slider: {
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    }
}
export default Screen3;