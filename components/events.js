import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';

const URL = 'https://jfc.org/events';


export default function Events(){
    const navigation = useNavigation();
    Linking.openURL(URL);
    
    
    navigation.reset({
      index: 0,
      routes: [{name: 'MyTabs'}],
    });

    return null;
}