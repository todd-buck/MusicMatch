import React from 'react'

//stack navigator import
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component import
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
            <Stack.Navigator>
            
                {/* Home Screen */}
                <Stack.Screen 
                    name="MusicMatch" 
                    component={HomeScreen}
                    title="MusicMatch"
                />

                {/* Settings Screen */}
                <Stack.Screen 
                    name="Settings" 
                    component={SettingsScreen}
                    title="Settings"
                />
                
            </Stack.Navigator>
    )
}

export default StackNavigator;