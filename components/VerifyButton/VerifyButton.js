import { Button } from "@react-navigation/elements"
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
export default function VerifyButton() {
    return(
        <TouchableOpacity style={style.Button}>
            <Button onPress={()=> navigation.navigate("MyModal")}>
                <Text style={style.Letter}>VERIFICAR</Text>
            </Button>
        </TouchableOpacity>
    ) 
}

const style = StyleSheet.create({
    container: {
        marginTop: 40
    },
    Button: {
        backgroundColor: "#0476BD",
        borderRadius: 50,
        width: "90%",
        margin: "auto",
    },
    Letter: {
        color: "white",
        padding: "15",
        margin: "auto",
    }
})