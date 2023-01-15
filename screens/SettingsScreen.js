import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ListItem, Icon } from '@rneui/themed'

import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [Setting1checked, Setting1setChecked] = React.useState([false, false]);
    const [Setting2checked, Setting2setChecked] = React.useState([false, false]);
    return (
        <View>
            <Text style={{fontSize: 40, backgroundColor: 'white', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 25,}}>Settings</Text>
    
            <ListItem bottomDivider topDivider>
                <ListItem.Content>
                    <ListItem.Title>Setting Option 1</ListItem.Title>
                    <ListItem.Subtitle>An Explanation of Setting 1</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={Setting1checked[0]}
                    onPress={() => Setting1setChecked([!Setting1checked[0], Setting1checked[1]])}
                />
            </ListItem>

            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>Setting Option 2</ListItem.Title>
                    <ListItem.Subtitle>An Explanation of Setting 2</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.CheckBox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checked={Setting2checked[0]}
                    onPress={() => Setting2setChecked([!Setting2checked[0], Setting2checked[1]])}
                />
            </ListItem>
        </View>
    )
}

export default SettingsScreen