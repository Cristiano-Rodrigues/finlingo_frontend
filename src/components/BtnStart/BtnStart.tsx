import { Button } from '@react-navigation/elements'
import { Text, TouchableOpacity } from "react-native"
import { Cadastro } from '../../screens/Cadastro/Cadastro'
import { styles } from "./style"

export function BtnStart() {
    return(
        <TouchableOpacity style={styles.Button}>
            <Button screen="Cadastro" style={styles.Letter}>
                <Text style={styles.Letter}>
                    COMEÇAR AGORA
                </Text>
                
            </Button>
        </TouchableOpacity>
    ) 
}