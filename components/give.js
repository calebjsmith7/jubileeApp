

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, {useEffect, useState } from 'react';
import { Text, Linking, View, Button } from 'react-native';

const URL = 'https://pushpay.com/g/jfclonetree';


export default function Give(){
    const navigation = useNavigation();
    Linking.openURL(URL);
    
    navigation.reset({
      index: 0,
      routes: [{name: 'MyTabs'}],
    });

    return null;
}