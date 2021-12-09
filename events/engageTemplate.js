import React from 'react';
import { Image, Text, View, Share, StyleSheet } from 'react-native';
import BackButton from '../components/backButton';
import { data } from '../components/eventData';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function engageTemplate({ route }){

// Share function

const onShare = async (eventLink) => {
    try {
      const result = await Share.share({
        message:
          eventLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }}


    return(
        <View>
            <BackButton/>
            {data.map((item)=> {
                if(item.slug == route.name){
                    return( 
                        <View style={{width: 370, marginLeft: 'auto', marginRight: 'auto', marginTop: 20}} key={data.indexOf(item)}>
                            <Image source={{uri: item.photo}} style={styles.eventImage}/>
                            <Text style={{fontSize: 25, margin: 5, marginLeft: 15}}>{item.title}</Text>
                            <Text style={{fontSize: 14, marginLeft: 15, color: '#565656'}}>{item.date}</Text>
                            <Text style={{fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10}}>{item.fulltext}</Text>
                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15}}>
                                <Text style={{color: '#565656', marginLeft: 15}}>{item.type}</Text>
                                <Text onPress={()=>onShare(item.link)}><Icon name="share" color={ '#565656'} size={18} style={{}}/> Share</Text>
                            </View>
                        </View>
                        
                            );
                }
            })
            }
        </View>
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