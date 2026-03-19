import { Link } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Olho from "../../../assets/olho.png"
import { styles } from "./styles";
import { BtnClose } from "../../components/BtnClose/BtnClose";
import Porquinho from "../../../assets/porquinho.png"
import { BoxInformation } from "../../components/BoxInformation/BoxInformation";
import google from "../../../assets/google.png"


export function LogIn() {
    return(
        <View style={styles.Container}>
            <View style={{gap: 40, marginTop: 50}}>
                <View>
                    <View style={{flexDirection: "row"}}>
                        <BtnClose />
                    </View>
                    <View style={{flexDirection: "row", marginHorizontal: "auto"}}>
                        <Image source={Porquinho} style={styles.Image}/>
                        <BoxInformation />
                    </View>
                </View>
                    <View style={styles.containerLogIn}>
                        <View style={styles.inputLogInU}>
                            <TextInput placeholder="E-mail" style={styles.Input} />
                        </View>

                        <View style={styles.inputLogInS}>
                            <TextInput placeholder="Senha" style={styles.Input} />
                            <Image source={Olho} style={{width: 30, height: 20, marginLeft: -25}} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Button}> 
                        <Text style={styles.Letter}>Entrar</Text>
                    </TouchableOpacity>
                <Text style={styles.link}>
                   <Link > ESQUECI A SENHA </Link>
                </Text>
            </View>
            <View style={{ gap: 50 }}>
                <View style={styles.googleContainer}>
                    <Image source={google} style={styles.googleImage} />
                    <Text style={styles.googleText}>Google</Text>
                </View>
                <Text style={styles.incentivo}>Use o Finlingo para aprender a construir o seu futuro financeiro</Text>
            </View>
        </View>
    )
}