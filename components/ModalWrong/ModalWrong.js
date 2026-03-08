import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import WrongImage from "../../assets/wrong.png"
import KeepButton from "../KeepButton/KeepButton";

export default function ModalWrong() {
    return(
        <View style={styles.realContainer}>
            <View style={styles.container}>
                <View style={styles.lineModal}></View>
                <View style={styles.modalInformation}>
                    <View style={styles.ImageMsg}>
                        <Image source={WrongImage} style={{width: 50, height: 52 }} />
                        <Text style={styles.modalText}>Incorrecto!</Text>
                    </View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.Letter}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    realContainer:{
        backgroundColor: "#000000ff",
        height: "100%",
    },
    container: {
        position:"absolute",
        bottom: 0,
        zIndex: 1,
        backgroundColor: "#F7C8C9",
        width: "100%",
        marginBottom: 30,
    },
    lineModal: {
        height: 2,
        backgroundColor:"#e00b0fff",
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
        color: "#e00b0fff"
    },
    Button: {
        backgroundColor: "#e00b0fff",
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