import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export class Footer extends Component {  
  render() {
    return (
    <View style={{ flex: 0.12, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row', paddingHorizontal: 30}}>
        <FontAwesome.Button 
            name="rotate-left"
            backgroundColor={'white'}
            color={'gold'}
            size={30}
        />
        <FontAwesome.Button 
            name="ban"
            backgroundColor={'white'}
            color={'red'}
            size={30}
        />
        <FontAwesome.Button 
            name="star"
            backgroundColor={'white'}
            color={'blue'}
            size={30}
        />
        <FontAwesome.Button 
            name="heart"
            backgroundColor={'white'}
            color={'green'}
            size={30}
        />
        <FontAwesome.Button 
            name="plus"
            backgroundColor={'white'}
            color={'purple'}
            size={30}
        />
    </View>
    )
  }
}

export default Footer
