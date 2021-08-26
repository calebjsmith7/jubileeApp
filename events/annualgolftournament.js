import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';



export default function AnnualGolfTournament(){
   const Navigation = useNavigation();
    return(
        <SafeAreaView>
        <Text>Annual Golf info...</Text>
        <View>
            <BackButton/>
        </View>
        
        </SafeAreaView>
    );
}