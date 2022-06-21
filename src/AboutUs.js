import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Tile, Text} from '@rneui/base'

export default class AboutUs extends Component {
    render() {
        return (
            <ScrollView >
            
                <Tile
                    title="Autobot Brain"
                    
                    imageSrc={require("./assets/images/Taxi.png")}
                    imageContainerStyle={{opacity:0.3}}
                    
                    featured={false}
                    activeOpacity={0.8}
                    width={400}
                    height={550}

                > 
                </Tile>
                <View style={{padding:8}}><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.     Hotline:-0702385230</Text>
                </View>
                <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ color: 'green' }}>Visit</Text>
                        <Text style={{ color: '#397af8' }}>Find out More</Text>
                    </View>
            </ScrollView>
        )
    }
}
