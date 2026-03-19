import { StyleSheet, Image, TouchableOpacity} from "react-native"
import Close from "../../../assets/close.png"
import { Button } from '@react-navigation/elements'
import { useNavigation } from "@react-navigation/native"
export function BtnClose() {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container}>
            <Button onPress={() => navigation.popToTop()} style={{backgroundColor:"transparent"}}>
                <Image source={Close} style={styles.image} />
            </Button>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: 20,
        height: 20
    }
})
