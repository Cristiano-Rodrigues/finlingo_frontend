import { Button } from "@react-navigation/elements";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Signin from "../../screens/Singin/Singin";


export default function SecondButton() {
    return (
        <TouchableOpacity style={style.Button}>
            <Button screen={Signin}>
                <Text style={style.Letter}>JÁ TENHO UMA CONTA</Text>
            </Button>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 40
    },
    Button: {
        backgroundColor: "white",
        borderRadius: 50,
        width: "90%",
        margin: "auto"
    },
    Letter: {
        color: "#0476BD",
        padding: "15",
        margin: "auto",
    }
})