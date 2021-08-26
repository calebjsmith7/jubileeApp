import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';



export default function Phil3(){
   
    return(
        <SafeAreaView>
        <Text>JL Philippians...</Text>
        <View>
            <BackButton/>
        </View>
        
        </SafeAreaView>
    );
}