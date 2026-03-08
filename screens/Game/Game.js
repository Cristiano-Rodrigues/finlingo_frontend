import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Close from "../../assets/close.png"
import Heart from "../../assets/heart.png"
import VerifyButton from "../../components/VerifyButton/VerifyButton";

export default function Game () {
    return(
        <View style={styles.container}>
            <View style={styles.gameBar}>
                <TouchableOpacity style={styles.containerClose}>
                    <Image source={Close} style={styles.closeBtn} />
                </TouchableOpacity>
                <View style={styles.LevelBar}>
                    <View style={styles.desGameBar}>
                        <Text style={{color: "#FBC31E"}}>
                                XP 50/100
                        </Text>
                        <Text style={styles.levelStyle}>
                            NIVEL 1
                        </Text>
                        <Image />
                        <View style={{flexDirection:"row", gap: 5, }}> 
                            <Image source={Heart} style={{height: 20, width: 20}} />    
                            <Text>5/5</Text>
                        </View>
                    </View>
                    <View style={styles.levelXp}></View>
                </View>
            </View>
            <View style={styles.quetionContainer}>
                <Text style={styles.quetion}>O que é rendimento?</Text>
            </View>
            <View style={styles.cardConatiner}>
                <View style={styles.cardCategory}>
                    
                    <Text style={styles.cardText}>Resposta</Text>
                </View>
                <View style={styles.cardCategory}>
                    
                    <Text style={styles.cardText}>Resposta</Text>
                </View>
                <View style={styles.cardCategory}>
                    
                    <Text style={styles.cardText}>Resposta</Text>
                </View>
                <View style={styles.cardCategory}>
                    
                    <Text style={styles.cardText}>Resposta</Text>
                </View>
            </View>
            <VerifyButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    gameBar: {
        marginTop: 40,
        flexDirection: "row"
    },
    desGameBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
    },
    LevelBar: {
        alignContent: "center",
        gap: 5,
        justifyContent: "space-between"
    },
    containerClose: {
        paddingHorizontal: 5,
        alignItems:"flex-end",
        justifyContent:"flex-end"
    },
    closeBtn:{
        height: 20,
    },
    levelXp: {
        backgroundColor: "#FBC31E",
        width: "95%",
        height: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#087fff42"
    },
    levelStyle: {
        color:"#0F9D58",
        fontWeight: "700"
    },
    quetionContainer: {
        width: "100%",
        paddingVertical: "100",
        justifyContent: "center",
        alignItems:"center"
    },  
    quetion: {
        fontSize:20,
        textAlign: "center",
        width: "100%"
        
    },
    cardConatiner: {
        width: "90%",
        marginHorizontal: "auto",
        gap: 20,
        marginTop: 70,
        marginBottom: 40,  
  },
  cardCategory: {
        width:"95%",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 50,
        /* Colocando sombras aos Cards */
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  cardText: {
        fontWeight: "400",
        fontSize: 16,
        marginLeft: 20,
  }
})