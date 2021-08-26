import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { data } from './eventData';





  export default function EventMap(){
    const navigation = useNavigation();
   

    return(
       data.map((item) => {
           return( 
           
        <View style={styles.event}>
            <TouchableOpacity onPress={()=> navigation.reset({routes: [{name: item.slug}]})}>
                <Image source={item.photo} style={styles.eventImage}/>
                <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>{item.title}</Text>
                <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>{item.date}</Text>
                <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>{item.summary}</Text>
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
                <Text style={{color: '#565656', marginLeft: 15}}>{item.type}</Text>
                <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
           </View>
        </View>

           );
       })
    );
}


const styles = StyleSheet.create({
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