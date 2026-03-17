

import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListHeader } from './ListHeader';

export default function Index() {
   const [tab, setTab] = useState('weekly'); 
   const [players, setPLayers] = useState([
      {id: '1', name: "Davis curtis", points:2569, country:"⭐"},
      {id: '2', name: "Alena Donin", points:1469, country:"⭐"},
      {id: '3', name: "craig house", points:1053, country:"⭐"},
      {id: '4', name: "madalyn dias", points:590, country:"⭐"},
      {id: '5', name: "zain vacarro", points:448, country:"⭐"},
      {id: '6', name: "geidt", points:440, country:"⭐"},
      {id: '7', name: "skylar", points:430, country:"⭐"},
      {id: '8', name: "skylar pault", points:40, country:"⭐"},
      {id: '8', name: "skydt", points:0, country:"⭐"},
   ]);

   
   {/*useEffect(() => {
       const interval = setInterval(() = > {
          setPLayers(prev => 
            [...prev]
              .map(p => ({
              ...p,
              points: p.points + Math.floor(Math.random()*5),
            }))
            .sort((a,b) => b.points - a.points)
          );
       }, 4000);

       return () => clearInterval(interval);
   }, []);*/}
    

   const renderItem = ({item, index}) => {
        const isTop = index < 3;

        return (

           <View style={[styles.card, isTop && {display:'none'}]}>
            <Text style={styles.rank}>
              {index+1}
            </Text>

            <View style={styles.avatar}>
               <Text style={styles.avatarText}>
                  {item.name}
               </Text>
            </View>

            <View style={{flex:1}}>
                <Text style={styles.name}>
                   {item.name}
                </Text>
                <Text style={styles.points}>
                    {item.points} points
                </Text>
            </View>

             <Text style={styles.flag}>
                    {item.country}
             </Text>
           </View>
          
        );
   };

  return (
   <SafeAreaView style={styles.container}>
     {/*header*/}
     <View style={styles.header}>
         <Text style={styles.back}>B</Text>
         <Text style={styles.title}>Leaderboard</Text>
         <View style={{width:30}}/>
     </View>

     {/*tabs*/}

     <View style={styles.tabs}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          tab === "weekly" && styles.activeTab,
        ]}
        onPress={() => setTab("weekly")}
      >
        <Text
          style={[
            styles.tabText,
            tab === "weekly" && styles.activeText,
          ]}
        >
          weekly
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          tab === "all" && styles.activeTab,
        ]}
        onPress={() => setTab("all")}   
      >
        <Text
         style={[
          styles.tabText,
          tab === "all" && styles.activeText,
         ]}
        >
          All time
        </Text>

      </TouchableOpacity>
     </View>

     <FlatList 
     style={{backgroundColor: 'red'}}
      data={players}
      keyExtractor={item => item.id}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={<ListHeader dataTop={players}/>}
      renderItem={renderItem}

      contentContainerStyle={{paddingBottom: 40}}
     />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0476BD',
    paddingHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    backgroundColor: '#0476BD'
  },

  back: {
    color: 'white',
    fontSize: 22
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#0476BD',
    borderRadius: 25,
    padding: 4,
    marginBottom: 20
  },

  tabButton: {
    flex:1,
    paddingVertical:10,
    alignItems: 'center',
    borderRadius: 20
  },

  activeTab: {
    backgroundColor: '#0597f2'
  },

  tabText: {
    color: '#aaa',
    fontWeight: '600'
  },

  activeText: {
    color: 'white'
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 18,
    marginHorizontal:8,
    marginVertical:6
  },

  topCard: {
    borderWidth: 1,
  },

  rank: {
    width: 30,
    fontSize: 16,
    fontWeight: 'bold'
  },

  avatar: {
    width: 42,
    height:42,
    borderRadius:21,
    backgroundColor: '#7d6cff',
    marginRight: 12
  },

  avatarText: {
    color: 'white',
    fontWeight: 'bold'
  },

  name: {
    fontWeight: 'bold',
    fontSize: 15
  },

  points: {
    color: "#666",
    fontSize:13
  },

  flag: {
    fontSize:18
  },

});

                 