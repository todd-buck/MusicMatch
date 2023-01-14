import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
const StyledView = styled(View)
const StyledText = styled(Text)

const TestScreen = () => {
    const navigation = useNavigation();
    return (
        <StyledView className="flex-1 items-center justify-center bg-black">
            <FontAwesome name={'code'} size={40} color="white"/>
            <StyledText className="text-zinc-50 text-lg mt-3">Page 2</StyledText>
            <StyledText className="text-zinc-50">Congratulations! You made a 2nd page!</StyledText>
        </StyledView>
    )
}

export default TestScreen