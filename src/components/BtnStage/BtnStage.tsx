import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import foto from "../../../assets/btnImg.png"

export function BtnStage() {
    return(
        <TouchableOpacity >
            <Image source={foto} />
        </TouchableOpacity>
    )
}