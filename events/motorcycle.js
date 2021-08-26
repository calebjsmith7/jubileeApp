import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';



export default function Motorcycle(){
   const Navigation = useNavigation();
    return(
        <SafeAreaView>
        <Text>Motorcycle info here...</Text>
        <View>
            <BackButton/>
        </View>
        
        </SafeAreaView>
    );
}