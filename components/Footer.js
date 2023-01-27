import React from 'react'
import { View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

const Footer = ( props ) => {
    var cardsLeft = props.cardsLeft;
    return (
        <View style={{ flex: 0.15, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row', paddingHorizontal: 25, borderTopColor: 'black'}}>
            <FontAwesome.Button 
                name="rotate-left"
                backgroundColor={'white'}
                color={'gold'}
                size={33}
                paddingVertical={20}
                onPress={() => {
                    cardsLeft = true;
                    cardRef.current.swipeBack()
                }}
            />
            <FontAwesome.Button 
                name="ban"
                backgroundColor={'white'}
                color={'red'}
                size={33}
                paddingVertical={17}
                onPress={() => {
                    if(cardsLeft) {
                        cardRef.current.swipeLeft()
                    }
                }}
            />
            <FontAwesome.Button 
                name="star"
                backgroundColor={'white'}
                color={'blue'}
                size={33}
                paddingVertical={15}
                onPress={() => {
                    if(cardsLeft) {
                        cardRef.current.swipeTop()
                    }
                }}
            />
            <FontAwesome.Button 
                name="heart"
                backgroundColor={'white'}
                color={'green'}
                size={33}
                paddingVertical={17}
                onPress={() => {
                    if(cardsLeft) {
                        cardRef.current.swipeRight()
                    }
                }}
            />
            <FontAwesome.Button 
                name="plus"
                backgroundColor={'white'}
                color={'purple'}
                size={33}
                paddingVertical={20}
            />
        </View>
    )
}

export default Footer