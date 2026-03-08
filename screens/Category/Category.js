import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Porco from "../../assets/porquinho.png"
import KeepButton from '../../components/KeepButton/KeepButton';
import Orcamento from "../../assets/orcamento.png"
import Imposto from "../../assets/imposto.png"
import Poupanca from "../../assets/poupanca.png"
import Voltar from '../../components/Voltar/Voltar';

export default function Category(){
    return(
        <View style={styles.container}>
          <View>
              <Voltar />
              <View style={styles.ild}>
                <Image source={Porco} style={styles.image}/>
                <View style={styles.boxMensage}>
                  <Text>Você quer aprender sobre ...</Text>
              </View>
          </View>
              </View>
            <Text style={styles.convite}>Escolha um tema para começar</Text>
            <View style={styles.cardConatiner}>
                <View style={styles.cardCategory}>
                    <Image style={styles.cardImage} source={Orcamento} />
                    <Text style={styles.cardText}>ORÇAMENTO</Text>
                </View>
                <View style={styles.cardCategory}>
                    <Image style={styles.cardImage} source={Imposto} />
                    <Text style={styles.cardText}>IMPOSTO</Text>
                </View>
                <View style={styles.cardCategory}>
                    <Image style={styles.cardImage} source={Poupanca} />
                    <Text style={styles.cardText}>POUPANÇA</Text>
                </View>
            </View>
            <View style={styles.btn}>  
                <KeepButton />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    gap: 90
  },
  ild: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
    flexDirection: "row",
    marginTop: ""
  },
  image: {
    width:"120",
    height:"120",
  },
  boxMensage: {
    backgroundColor:"white",
    padding: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  },
  convite: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    
  },
  cardConatiner: {
    width: "90%",
    marginHorizontal: "auto",
    gap: 30,
    
  },
  cardCategory: {
    flexDirection: "row",
    gap: 10,
    width:"95%",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    /* Colocando sombras aos Cards */
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 40,
    height: 40,
    marginLeft: 15
  },
  cardText: {
    fontWeight: "600",
    fontSize: 20
  }
});