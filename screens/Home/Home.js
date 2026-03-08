import { StyleSheet, View, Image, Text } from 'react-native';
import MainButton from '../../components/MainButton/MainButton';
import SecondButton from '../../components/SecondButton/SecondButton';
import Finlingo from '../../components/Finlingo/Finlingo';
import Porco from "../../assets/porquinho.png"
import { Link, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import ModalRight from '../../components/ModalRight/ModalRight';
import ModalWrong from '../../components/ModalWrong/ModalWrong';


export default function Home(){
  const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.ild}>
                <Image source={Porco} style={styles.image}/>
                <Finlingo />
                <Text style={styles.descrition}>A forma grátis, divertida e eficaz de aprender e construir o teu futuro financeiro</Text>
            </View>
            <View style={styles.btn}>    
              <MainButton />
              <SecondButton />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4FF",
    gap: 120,
  },
  ild: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170
  },
  image: {
    width:"150",
    height:"150",
  },
  descrition: {
    width: "330",
    textAlign: "center",
  },
  letter:  {
    color: "white",
  },
  btn: {
    gap: 20,
    width: "100%"
  }
});