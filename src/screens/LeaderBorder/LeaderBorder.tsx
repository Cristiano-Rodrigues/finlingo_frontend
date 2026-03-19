import { Text, Pressable, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./style";
import React, {useState} from "react";
import {} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        <Image  />
      </Text>

      <View />
    </View>
  )
}


const TopUser = ({userInfo}) => {
    const isTop1 = (userInfo.id == "1");
    return (
        <View style={styles.topUserContainer}>
           <Image 
            style={!isTop1 && {borderRadius: '50%'}}
           />
           <Text style={styles.topUserName}>{userInfo.name}</Text>
           <Text style={styles.topUserXp}>{userInfo.points} xp</Text>
        </View>
    )
}

const NonTopUsers = ({nonTopUserInfo, position}) => {

  return (
    <View style={[styles.nonTopUserContainer, position < 4 && {display: 'none'}]}>
      <Text style={styles.nonTopPosition}>{position}</Text>
      <Image />
      <View style={styles.nonTopUserInfo}>
        <Text style={styles.nonTopUserName}>{nonTopUserInfo.name}</Text>
        <Text style={styles.nonTopUserXp}>{nonTopUserInfo.points} xp</Text>
      </View>
    </View>
  )
}


export function LeaderBorder() {
   const [tab, setTab] = useState('agora'); 
     const [players, setPLayers] = useState([
          {id: '1', name: "Davis curtis", points:2569},
          {id: '2', name: "Alena Donin", points:1469},
          {id: '3', name: "craig house", points:1053},
          {id: '4', name: "madalyn dias", points:590},
          {id: '5', name: "zain vacarro", points:448},
          {id: '6', name: "geidt", points:440},
          {id: '7', name: "skylar", points:430},
          {id: '8', name: "skylar pault", points:40},
          {id: '8', name: "skydt", points:0},
       ]);
    


    return (
      <View style={{flex:1}}>
        <Header />

        <ScrollView style={styles.container}
         contentContainerStyle={{
          alignItems: 'center', paddingTop: 40
         }}
        >
          

            <View style={styles.tabs}>
                  <TouchableOpacity
                    style={[
                      styles.tabButton,
                      tab === "agora" && styles.activeTab,
                    ]}
                    onPress={() => setTab("agora")}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        tab === "agora" && styles.activeText,
                      ]}
                    >
                      Agora
                    </Text>
                  </TouchableOpacity>
            
                  <TouchableOpacity
                    style={[
                      styles.tabButton,
                      tab === "hoje" && styles.activeTab,
                    ]}
                    onPress={() => setTab("hoje")}   
                  >
                    <Text
                     style={[
                      styles.tabText,
                      tab === "hoje" && styles.activeText,
                     ]}
                    >
                      Hoje
                    </Text>
            
                  </TouchableOpacity>
                 </View>

                 <View style={styles.message}>
                    <View>
                        <Image />
                    </View>

                    <View style={styles.messageText}>
                        <View style={styles.messageDescription}>
                         <Text style={styles.cheerMessage}>Não estás em uma excelente posição. Precisas melhorar muito jacaré</Text>
                        </View>
                    </View>
                 </View>

                 <View style={styles.topPlayers}>
                     <View style={styles.topPlayerDetail}>
                        <TopUser userInfo={players[1]}/>
                        <View style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                            <Image />
                            <Image style={{position: 'absolute'}}  />
                        </View>
                        
                    </View>

                     <View style={styles.topPlayerDetail}>
                        <TopUser userInfo={players[0]}/>
                        <View style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                            <Image />
                            <Image style={{position: 'absolute'}}  />
                        </View>
                        
                    </View>

                      <View style={styles.topPlayerDetail}>
                        <TopUser userInfo={players[2]}/>
                        <View style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                            <Image />
                            <Image style={{position: 'absolute'}}  />
                        </View>
                        
                    </View>
                 </View>

                 <View 
                 style={{backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap:8}}
                 >
                   {
                    players.map((element,index) => (
                      <NonTopUsers key={index} nonTopUserInfo={players[index]}
                       position={index+1}
                      />
                    ))
                   }
                   
                 </View>


        </ScrollView>
      </View>  
    )
}



