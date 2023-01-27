import React from 'react';
import { View } from 'react-native';

// for header buttons (Settings Page, Spotify Connect)
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// for global ref object used by CardSwiper and Footer (might not be needed)
import { useRef } from 'react';

//component imports
import CardSwiper from '../components/CardSwiper';
import Footer from '../components/Footer';

// Placeholder data for cards, will be replaced with real data from Spotify API
const DUMMY_DATA = [
    {
        songTitle: "Year 3000",
        songArtist: "Jonas Brothers",
        songAlbum: "Busted",
        songUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Jonas_Brothers_%28Jonas_Brothers_album_-_cover_art%29.jpg",
        id: 1,
    },
    {
        songTitle: "Sparks Fly",
        songArtist: "Taylor Swift",
        songAlbum: "Speak Now",
        songUrl: "https://live.staticflickr.com/5257/5457426139_e97c4b1d6e.jpg",
        id: 2,
    },
    {
        songTitle: "Falling",
        songArtist: "Harry Styles",
        songAlbum: "Fine Line",
        songUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png",
        id: 3,
    },
]

const HomeScreen = () => {
    const cardRef = useRef(null);
    
    const navigation = useNavigation();
    navigation.setOptions ({
        // headerLeft will eventually change icon based on music app connection (Apple Music, Spotify)
        headerLeft: () => (
            <FontAwesome.Button 
                name="spotify"
                backgroundColor={'white'}
                color={'lightgreen'}
                size={25}
                // onPress={() => navigation.navigate("Connect")}
            />
        ),
        headerRight: () => (
            <FontAwesome.Button 
                name="gear"
                backgroundColor={'white'}
                color={'black'}
                size={25}
                onPress={() => navigation.navigate("Settings")}
            />
        )
    });

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <CardSwiper cardRef = {cardRef} DUMMY_DATA={DUMMY_DATA}/>
            <Footer cardRef = {cardRef}/>
        </View>
    )
}

export default HomeScreen


