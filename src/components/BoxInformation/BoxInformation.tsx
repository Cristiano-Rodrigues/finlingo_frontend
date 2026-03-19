import { View, Text } from "react-native";
import { styles } from "./styles";

export function BoxInformation() {
    return(
        <View style={styles.Box}>
            <Text style={styles.BoxText}>
                Insira seus dados para voltar a jogar
            </Text>
        </View>
    )
}