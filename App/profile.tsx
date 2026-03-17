import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";


const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => router.push("/")}>
        <Image source={require('../aa-assets-images/arrowLeft.png')} />
      </Pressable>

      <Text style={styles.headerText}>
        <Image source={require('../aa-assets-images/Perfil.png')} />
      </Text>

      <View />
    </View>
  )
}

export default function Profile() {
    return (
        <View style={styles.container}>
          <Header />
          <Stack.Screen options={{headerShown: false}}></Stack.Screen>
          <View style={styles.userInfoContainer}>
            <Image source={require('../aa-assets-images/woman.png')} style={{marginTop: '-40px'}} />
            <Text style={styles.userName}>fortaran</Text>
            <Text style={styles.userEmail}>fortunato@gmail.com</Text>

            <View style={styles.details}>
                <View style={styles.badgesContainer}>
                   <Image source={require('../aa-assets-images/star.png')}/>
                   <Image source={require('../aa-assets-images/PONTOS.png')}/>
                   <Text style={styles.points}>520</Text>
                </View>

                <Image source={require('../aa-assets-images/Divider.png')} />

                <View style={styles.badgesContainer}>
                   <Image source={require('../aa-assets-images/clock.png')}/>
                   <Image source={require('../aa-assets-images/TEMPO.png')}/>
                   <Text style={styles.points}>43 min</Text>
                </View>

                <Image source={require('../aa-assets-images/Divider.png')} />

                <View style={styles.badgesContainer}>
                   <Image source={require('../aa-assets-images/target.png')}/>
                   <Image source={require('../aa-assets-images/VITORIAS.png')}/>
                   <Text style={styles.points}>56</Text>
                </View>
                
            </View>
          </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    headerContainer: {
    height: 46,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: '#F0F4FF'
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 90,
    backgroundColor: '#F0F4FF'
  },

  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 14
  },

  details: {
    backgroundColor: '#0597F2',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12
  },

  badgesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4
  },

  points: {
    color: 'white',
    fontWeight: 'bold'
  },

  userName: {
    color: '#737373',
    fontWeight: 'bold',
  },

  userEmail: {
    color: '#737373'
  }
});