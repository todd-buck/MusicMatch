import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

//external library import (see react-native-deck-swiper on GitHub for docs)
import Swiper from 'react-native-deck-swiper';

//for card information styling
import { LinearGradient } from 'expo-linear-gradient';

export class CardSwiper extends Component {
  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'white', zIndex: 0}}>
        <Swiper
            //imports
            ref={this.props.cardRef}
            cards={this.props.DUMMY_DATA}

            //dev logging (should be turned off in production)
            onSwipedLeft={() => console.log('onSwipedLeft')}
            onSwipedRight={() => console.log('onSwipedRight')}
            onSwipedTop={() => console.log('onSwipedTop')}

            //styling
            containerStyle={{backgroundColor: 'tranparent'}}
            stackSize={3}
            disableBottomSwipe={true}

            //for previous card functionality
            animateCardOpacity={true}
            swipeBackCard={true}

            renderCard={(card) => (
                <View key={card.id} style={{ flex: 0.75, backgroundColor: 'white', borderRadius: 50}}>
                    <Image 
                        style={{height: '100%', width: '100%', borderRadius: 50, position: 'absolute', top: 0}} 
                        source={{uri: card.songUrl}}
                    />
                    <View style={{flex: 0.25, marginTop: 'auto', justifyContent: 'flex-end', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>   
                        <LinearGradient colors={['rgba(0,0,0,0.01)','rgba(0,0,0,0.05)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']} locations={[0,0.1,0.2,0.26]} style={{ padding: 15, paddingTop: 40, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                            <Text style={{color: 'white', marginLeft: 10, fontSize: 40, fontWeight: 'bold'}}>{card.songTitle}</Text>
                            <Text style={{color: 'white', marginLeft: 10, fontSize: 25,}}>{card.songArtist}</Text>
                            <Text style={{color: 'white', marginLeft: 10, fontSize: 25,}}>{card.songAlbum}</Text>
                        </LinearGradient>
                    </View>
                </View>
            )}
            />     
        </View>
    )
  }
}

export default CardSwiper
