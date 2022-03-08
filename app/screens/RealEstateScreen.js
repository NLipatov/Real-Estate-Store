import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View, Platform, Image, ScrollView } from 'react-native';
import {StatusBar} from 'react-native';



const RealEstateScreen = () => {
    const [people, setPeople] = React.useState([
        { 
            name: '13,000,000 AED', key: 1, url: 'https://imagevars.gulfnews.com/2017/10/10/1_16a083d2c1d.2103731_3290610138_16a083d2c1d_large.jpg'
        },
        { 
            name: '12,600,000 AED', key: 2, url: 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fimg.gtsstatic.net%2Freno%2Fimagereader.aspx%3Fimageurl%3Dhttps%253A%252F%252Fsir.azureedge.net%252F1259i215%252Fennkq1z059sqm06r3dw69fzy61i215%26option%3DN%26permitphotoenlargement%3Dfalse&option=N&permitphotoenlargement=false&w=1200'
        },
        { 
            name: '10,00,000 AED', key: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbjXSiBvHQs9hw29PllKwqQsZkSARApFtXqD15iO9-GwSQNtFp375iIaC0qIwpdt5OV0&usqp=CAU'
        },
        { 
            name: '8,000,000 AED', key: 4, url: 'https://safehubcollective.org/wp-content/uploads/2021/10/jaw-dropping-features-of-the-costliest-mansion-in-dubai-1.jpg'
        },
        { 
            name: '8,400,000 AED', key: 5, url: 'https://modern-villas.com/wp-content/uploads/2019/04/Marvelous-6-Bedroom-Villa-in-Dubai-5.jpg'
        },
        { 
            name: '6,000,000 AED', key: 6, url: 'https://www.essenzaliving.com/wp-content/uploads/2018/05/La-Alqueria-27-2.jpg'
        },
    ])


    return (
        <View style={styles.container}>
            <View style={{height: 100, backgroundColor: 'grey', width: '100%', borderBottomLeftRadius: 25, backgroundColor: 'transparent'}}>
                <View style={{paddingTop: 30}}>
                    <Image style={{resizeMode: 'contain', height: 65, width: '100%'}} source={require("../assets/BSOLogo.png")}/>
                </View>
            </View>
            <ScrollView>
            {people.map((item)=> {
                return (
                    <View style={{marginBottom: 0}}>
                        <Image style={{height: 200, marginTop: 100}} source={{uri: item.url}}/>
                        <View style={styles.item} key={item.key}>
                            <Text>
                                {item.name}
                            </Text>
                        </View>
                    </View>
                )
            })}
            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 0
    },
    item: {
        backgroundColor: 'pink',
        fontSize: 24
    }
})

export default RealEstateScreen;