import { View, Text, Image } from "react-native";
import { styles } from "./style"


const Header = () => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        <Image />
      </Text>

      <View />
    </View>
  )
}


export function User() {
    return(
        <View style={styles.container}>
          <Header />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>fortaran</Text>
            <Text style={styles.userEmail}>fortunato@gmail.com</Text>

            <View style={styles.details}>
                <View style={styles.badgesContainer}>
                   <Image />
                   <Image />
                   <Text style={styles.points}>520</Text>
                </View>

                <Image  />

                <View style={styles.badgesContainer}>
                   <Image />
                   <Image />
                   <Text style={styles.points}>43 min</Text>
                </View>

                <Image />

                <View style={styles.badgesContainer}>
                   <Image />
                   <Image />
                   <Text style={styles.points}>56</Text>
                </View>
                
            </View>
          </View>
        </View>
    )
}

