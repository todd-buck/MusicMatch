import { Button, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Footer } from './footer';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      <Footer/>
    </NavigationContainer>
  );
}
