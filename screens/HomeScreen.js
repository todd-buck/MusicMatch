import React from 'react';
import { Button, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
const StyledView = styled(View)
const StyledText = styled(Text)

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <StyledView className="flex-1 items-center justify-center bg-black">
            <FontAwesome name={'plus'} size={40} color="white"/>
            <StyledText className="text-zinc-50 text-lg mt-3">Music Match</StyledText>
            <StyledText className="text-zinc-50">An App by Todd Buck</StyledText>
            <Button title='Next Page' onPress={() => navigation.navigate("Test")}/>
        </StyledView>
    )
}

export default HomeScreen


