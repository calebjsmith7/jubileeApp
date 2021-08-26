import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/backButton';



export default function FallWomensBibleStudies(){
   const Navigation = useNavigation();
    return(
        <SafeAreaView>
        <Text>Fall Womens Bible Studies...</Text>
        <View>
            <BackButton/>
        </View>
        
        </SafeAreaView>
    );
}