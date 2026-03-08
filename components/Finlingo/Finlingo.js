import { Text, StyleSheet } from "react-native";

export default function Finlingo(){
    return ( 
        <Text style={styles.finlingo}>finlingo</Text>  
    )
}

const styles = StyleSheet.create({
    finlingo: {
        color: "#0476BD",
        fontWeight: "900",
        fontSize: 50,
        fontFamily:"Fredoka",
    }
})