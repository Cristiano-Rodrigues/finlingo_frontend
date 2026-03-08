import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import VoltarImg from "../../assets/voltar.png"
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

export default function Voltar() {
    const navigation = useNavigation()
    return(
        <View style={styles.conteinerVoltar}>
            <TouchableOpacity style={styles.btnVoltar}>
                <Button onPressIn={()=> navigation.goBack()}>
                    <Image source={VoltarImg} style={styles.image}/>
                </Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conteinerVoltar: {
        width:"100%",
        
        marginTop: 40,
    },
    btnVoltar: {
       marginLeft: 10,
    },
    image: {
        width: 40, 
        height: 40,
    }
})