import { StyleSheet, Image, TouchableOpacity} from "react-native"
import Close from "../../assets/close.png"
import { Button } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"
export default function CloseButton() {
    const navgation = useNavigation()
    return(
        <TouchableOpacity style={styles.container}>
            <Button onPressIn={()=> navgation.popToTop()} style={{backgroundColor:"transparent"}}>
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