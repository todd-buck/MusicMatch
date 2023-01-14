import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    // <StackNavigator></StackNavigator>
    <View className="flex-1 items-center justify-center bg-black">
      <FontAwesome name={'plus'} size={40} color="white"/>
      <Text className="text-zinc-50 text-lg mt-3">Music Match</Text>
      <Text className="text-zinc-50">An App by Todd Buck</Text>
      <Button title='Click Me!'/>
      <StatusBar style="auto" />
    </View>
  );
}
