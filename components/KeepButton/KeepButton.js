import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';



export default function KeepButton(){
    return(
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.Letter}>CONTINUAR</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    Button: {
        backgroundColor: "#0476BD",
        borderRadius: 30,
        width: "90%",
        margin: "auto"
    },
    Letter: {
        color: "white",
        padding: "15",
        margin: "auto",
    }
});