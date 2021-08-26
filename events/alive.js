import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';



export default function Alive(){
   const Navigation = useNavigation();
    return(
        <SafeAreaView>
        <Text>Alive info here...</Text>
        <View>
            <BackButton/>
        </View>
        
        </SafeAreaView>
    );
}