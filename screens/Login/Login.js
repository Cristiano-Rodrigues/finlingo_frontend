import { Link } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { Button } from "@react-navigation/elements";
import Olho from "../../assets/olho.png"
import CloseButton from "../../components/CloseButton/CloseButton";

export default function Login() {
    return(
        <View style={{gap: 200}}>
            <View style={{gap: 80, marginTop: 50}}>
                <View style={{flexDirection: "row"}}>
                    <CloseButton />
                    <Text style={styles.textHeader}>
                        Insira os seus dados
                    </Text>
                </View>
                <form>
                    <View style={styles.containerLogIn}>
                        <View style={styles.inputLogInE}>
                            <TextInput placeholder="Usuário ou e-mail" style={styles.Input} />
                        </View>
                            
                        <View style={styles.inputLogInS}>
                            <TextInput placeholder="Senha" style={styles.Input} />
                            <Image source={Olho} style={{width: 30, height: 20, marginLeft: -25}} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Button}> 
                        <Button onPress={()=> navigation.navigate("MyModal")}>
                            <Text style={styles.Letter}>
                                Entrar
                            </Text>
                        </Button>
                    </TouchableOpacity>
                </form>
                <Text style={styles.link}>
                    <Link style={{fontWeight: "900"}}>ESQUECI A SENHA</Link>
                </Text>
            </View>
            <Text style={styles.incentivo}>Use o Finlingo para aprender a construir o seu futuro financeiro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
        marginLeft: 30
    },
    containerLogIn:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputLogInE: {
        backgroundColor: "white",
        width: "90%",

        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    inputLogInS: {
        backgroundColor: "white",
        width: "90%",

        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderColor:"#00000091",
        borderTopWidth:1,
    },
    Input: {
        width: "90%"
    },
    Button: {
        backgroundColor: "#FBC31E",
        borderRadius: 30,
        width: "90%",
        margin: "auto"
    },
    Letter: {
        color: "white",
        padding: "10",
        margin: "auto",
        fontSize: 20,
        fontWeight:"900"
    },
    link: {
        textAlign: "center",
        fontSize: 16,
    },
    incentivo: {
        fontSize: 15,
        textAlign: "center",
        width: "90%",
        marginLeft: 10,
    }
})