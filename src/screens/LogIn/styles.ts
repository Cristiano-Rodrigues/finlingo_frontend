import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    Container: {
        gap: 120,
        backgroundColor: "#F0F4FF",
        flex: 1
    },
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
    inputLogInU: {
        backgroundColor: "white",
        width: "90%",

        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    inputLogInE: {
        backgroundColor: "white",
        width: "90%",
        borderColor:"#00000091",
        borderTopWidth:1,
        padding: 5,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
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
        width: "90%",
        padding: 10,
    },
    Button: {
        backgroundColor: "#FBC31E",
        borderRadius: 15,
        width: "90%",
        margin: "auto",
        borderWidth: 0.5,
        borderColor: "#69500593",
        borderBottomWidth: 3,
    },
    Letter: {
        color: "white",
        padding: 10,
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
    },
    Image : {
        width: 144,
        height: 122
    },
    googleContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        width: 192,
        height: 50,
        marginHorizontal: "auto",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    googleImage: {
        width: 25,
        height: 25
    },
    googleText: {
        fontSize: 15,
        fontWeight: "500"
    }
})