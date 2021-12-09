import React from 'react';
import { ScrollView, Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

import bg from '../images/bg.jpg';


import Icon from 'react-native-vector-icons/FontAwesome';
import EventMap from './EventMap';






export default function Latest({ navigation }){
    return(
      <ScrollView>
        <View style={styles.vision}>
          <ImageBackground source={bg} style={styles.visionImage}>
            <View style={styles.empowering}>
              <Text style={{color: 'white', margin: 'auto', fontSize: 37, alignSelf: 'center'}}>Empowering</Text>
              <Text style={{color: 'white', margin: 'auto', fontSize: 37, alignSelf: 'center'}}>All Generations</Text>
            </View>
            <View style={styles.chevron}>
              <Icon name="chevron-down" color={ 'white' } size={35} style={{alignSelf: 'center'}}/>
            </View>
          </ImageBackground> 
        </View>

        <EventMap/>
      </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vision: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      color: '#fff',
      height: 40,
      width: 150,
      marginTop: 60,
      marginBottom: 5,
      resizeMode: 'contain'
    },
    visionImage: {
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    visionText: {
      color: 'white',
      margin: 'auto'
      
    },
    empowering: {
      padding: 54,
      paddingTop: 170,
      paddingBottom: 250
    },
    chevron: {
      paddingBottom: 200
    },
    event: {
      height: 'auto',
      alignSelf: 'center',
      backgroundColor: '#FDFCFA',
      marginBottom: 5,
      marginTop: 20,
      paddingBottom: 20
      
    },
    eventImage: {
      alignSelf: 'stretch',
      resizeMode: 'contain',
      height: 210,
      width: 370
    }
  });