import React from 'react';
import { ScrollView, Text, View, ImageBackground, Image, StyleSheet } from 'react-native';

import bg from '../images/bg.jpg';
import jsmretreat from '../images/jsmretreat.jpg';
import motorcycle from '../images/motorcycle.jpg';
import womensbible from '../images/womensbible.jpg';
import golf from '../images/golf.jpeg';
import israel from '../images/israel.jpeg';
import mensgathering from '../images/mensgathering.jpeg';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Latest(){
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
    <View style={styles.event}>
      <Image source={jsmretreat} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Alive Youth Retreat</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>Postponed October, 2021</Text>
      <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>JSM Youth 6th - 12th Grades, Every Student is invited to join us for a weekend of anointed worship, awesome messages, incredible...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
    <View style={styles.event}>
      <Image source={motorcycle} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Motorcycle Rally</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>August 26, 2021</Text>
  <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>Join us on Sunday, August 22nd at 10:30am for an amazing ride. Long time rider, Pat Dunahay, is designing a ride through the mountains...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
    <View style={styles.event}>
      <Image source={womensbible} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Alive Youth Retreat</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>Postponed October, 2021</Text>
      <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>JSM Youth 6th - 12th Grades, Every Student is invited to join us for a weekend of anointed worship, awesome messages, incredible...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
    <View style={styles.event}>
      <Image source={golf} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Alive Youth Retreat</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>Postponed October, 2021</Text>
      <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>JSM Youth 6th - 12th Grades, Every Student is invited to join us for a weekend of anointed worship, awesome messages, incredible...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
    <View style={styles.event}>
      <Image source={israel} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Alive Youth Retreat</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>Postponed October, 2021</Text>
      <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>JSM Youth 6th - 12th Grades, Every Student is invited to join us for a weekend of anointed worship, awesome messages, incredible...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
    <View style={styles.event}>
      <Image source={mensgathering} style={styles.eventImage}/>
      <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>Alive Youth Retreat</Text>
      <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>Postponed October, 2021</Text>
      <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>JSM Youth 6th - 12th Grades, Every Student is invited to join us for a weekend of anointed worship, awesome messages, incredible...</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
      <Text style={{color: '#565656', marginLeft: 15}}>Engage</Text>
      <Text><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
      </View>
    </View>
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