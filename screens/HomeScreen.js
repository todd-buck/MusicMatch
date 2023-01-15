import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
            <FontAwesome name={'plus'} size={40} color="white"/>
            <Text style={{color: 'white', fontSize: 20, marginTop: 3}}>Music Match</Text>
            <Text style={{color: 'white', fontSize: 15, marginTop: 3}}>An App by Todd Buck</Text>
        </View>
    )
}

export default HomeScreen


