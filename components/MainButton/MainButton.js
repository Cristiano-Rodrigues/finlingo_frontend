import { Button } from "@react-navigation/elements"
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import Login from "../../screens/Login/Login"
export default function MainButton() {
    return(
        <TouchableOpacity style={style.Button}>
            <Button screen={Login}>
                <Text style={style.Letter}>COMEÇAR AGORA</Text>
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
        margin: "auto"
    },
    Letter: {
        color: "white",
        padding: "15",
        margin: "auto",
    }
})