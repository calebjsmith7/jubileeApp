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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Footer,
  Button,
  Linking
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ikon from 'react-native-vector-icons/Ionicons';

import jfclogo from './images/logo.png';
import Latest from './components/latest';
import Engage from './components/engage';
import Media from './components/media';
import Give from './components/give';
import Events from './components/events';
import Alive from './events/alive';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Motorcycle from './events/motorcycle';
import FallWomensBibleStudies from './events/fallwomensbiblestudies';
import AnnualGolfTournament from './events/annualgolftournament';
import KOMHJJ from './media/KOMHJJ';
import Phil3 from './media/Phil3';



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
  

  return (
    <NavigationContainer>
      
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={jfclogo} style={styles.header}/>
      </View>
    </SafeAreaView>
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTabs" component={MyTabs}/>
        <Stack.Screen name="Alive" component={Alive}/>
        <Stack.Screen name="Motorcycle" component={Motorcycle}/>
        <Stack.Screen name="FallWomensBibleStudies" component={FallWomensBibleStudies}/>
        <Stack.Screen name="AnnualGolfTournament" component={AnnualGolfTournament}/>
        <Stack.Screen name="Komhjj" component={KOMHJJ}/>
        <Stack.Screen name="Phil3" component={Phil3}/>
        
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
