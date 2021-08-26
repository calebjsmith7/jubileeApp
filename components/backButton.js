import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';



export default function BackButton(){
    const Navigation = useNavigation();
     return(

        <Button title="Back" onPress={() => Navigation.navigate({
            name: 'MyTabs'})}>
                Back
        </Button>

     );
}