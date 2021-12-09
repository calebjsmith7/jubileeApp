/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ikon from 'react-native-vector-icons/Ionicons';


import axios from 'axios';


import jfclogo from './images/logo.png';
import Latest from './components/latest';
import Engage from './components/engage';
import Media from './components/media';
import Give from './components/give';
import Events from './components/events';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import engageTemplate from './events/engageTemplate';
import mediaTemplate from './media/mediaTemplate';
import { data } from './components/eventData';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Latest} screenOptions={{ tabBarStyle: { backgroundColor: 'black' }, tabBarBadgeStyle: { textColor: '#FAF9F6'}, headerShown: false }}>
      <Tab.Screen name="Latest" component={Latest} options={{
          tabBarLabel: 'Latest',
          tabBarIcon: () => (
            <Icon name="compass" color="#FAF9F6" size={30} />
          ),
        }}/>
      <Tab.Screen name="Engage" component={Engage} options={{
          tabBarLabel: 'Engage',
          tabBarIcon: () => (
            <Ikon name="people-circle-outline" color="#FAF9F6" size={30} />
          ),
        }}/>
      <Tab.Screen name="Media" component={Media} options={{
          tabBarLabel: 'Media',
          tabBarIcon: () => (
            <Ikon name="play-circle-outline" color="#FAF9F6" size={30} />
          ),
        }}/>
      <Tab.Screen name="Give" component={Give}  options={{
          tabBarLabel: 'Give',
          tabBarIcon: () => (
            <Ikon name="heart-circle-outline" color="#FAF9F6" size={30} />
          ),
        }} 
        />

      <Tab.Screen name="Events" component={Events} options={{
          tabBarLabel: 'Events',
          tabBarIcon: () => (
            <Ikon name="time-outline" color="#FAF9F6" size={30} />
          ),
        }}/>

    </Tab.Navigator>
  );
}



function App(){

  
// google sheets connectivity only worked with firebaseproj
/*
const sheetbest = 'https://sheet.best/api/sheets/8cf7e365-ac92-4ead-8077-812886d239fc';
const googsheet = 'https://docs.google.com/spreadsheets/d/1VQJtzX_yPHWYAqOF9X2e-bLoT1F78Gipvcd1gCNAQug/edit#gid=0';
let firebaseproj = 'https://jfcappdata.web.app';
let awsobj = 'https://jfcdataaccesspoint7-322786376117.s3-accesspoint.us-west-1.amazonaws.com/data.json';
let eventdata;

const getDataUsingSimpleGetCall = () => {
axios.get(awsobj)
.then((res)=>{
  
  console.log([res.data]);
  eventdata = JSON.stringify(res.data);
  
  

})
.catch((error)=> {
  console.log(error);
})
};
// commented out to avoid accidentally calling this func
// getDataUsingSimpleGetCall();

*/




  return (

    <NavigationContainer>

      <SafeAreaView>
        <View style={styles.container}>
          <Image source={jfclogo} style={styles.header} />
        </View>
      </SafeAreaView>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        {function makenav() {
          data.map((item) => {
            if (item.type == 'Engage') {
              return (
                <Stack.Screen name={item.slug} component={engageTemplate} key={data.indexOf(item)} />
              )
            } else if (item.type == 'Media') {
              return (
                <Stack.Screen name={item.slug} component={mediaTemplate} key={data.indexOf(item)} />
              )
            }


          })
        }}


      </Stack.Navigator>


    </NavigationContainer>
  );
     
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 40,
    width: 150,
    marginTop: 60,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  footer: {
    backgroundColor: 'black'
  },
  content: {
    height: 580
  },
  footerButtons: {
    width: 50,
    height: 120,
    backgroundColor: 'white',
    color: 'white'

  }
});

export default App;
