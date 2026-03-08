import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import RightImage from "../../assets/right.png"
import KeepButton from "../KeepButton/KeepButton";

export default function ModalRight() {
    return(
        <View style={styles.container}>
            <View style={styles.lineModal}></View>
            <View style={styles.modalInformation}>
                <View style={styles.ImageMsg}>
                    <Image source={RightImage} style={{width: 50, height: 52 }} />
                    <Text style={styles.modalText}>Fez Bonito!</Text>
                </View>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.Letter}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        bottom: 0,
        zIndex: 1,
        backgroundColor: "#D7FFB7",
        width: "100%",
        marginBottom: 30,
    },
    lineModal: {
        height: 2,
        backgroundColor:"#02771fff",
    },
    modalInformation: {
        justifyContent:"center",
        alignItems:"center",
        width:"90%"
    },
    ImageMsg: {
        width:"100%",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    modalImage:{

    },
    modalText: {
        textAlign: "center",
        fontSize: 25,
        marginLeft: 10,
        fontWeight: "900",
        color: "#086100ff"
    },
    Button: {
        backgroundColor: "#086100ff",
        borderRadius: 30,
        width: "100%",
        marginLeft: "30",
        marginBottom: 20,

    },
    Letter: {
        color: "white",
        padding: "10",
        margin: "auto",
        fontSize: 20,
    }

})