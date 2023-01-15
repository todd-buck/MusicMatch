import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FontAwesome } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            {/* Home Screen */}
            <Stack.Screen 
                name="MusicMatch" 
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitleStyle: {
                        color: 'black',
                    },
                    footerStyle: {
                        backgroundColor: 'white',
                    },
                    headerRight: () => (
                        <FontAwesome.Button 
                            name="gear"
                            backgroundColor={'white'}
                            color={'black'}
                            size={25}
                            onPress={() => navigation.navigate("Settings")}
                        />
                    )
                }}
            />

            {/* Page 2 */}
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitleStyle: {
                        color: 'black',
                    },
                    footerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;