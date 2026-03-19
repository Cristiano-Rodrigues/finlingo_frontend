import { Image, View } from "react-native"
import Img from "../../../assets/home.png"

export function HomeImage() {
    return(
        <View style={{backgroundColor: "white", borderRadius: 50, width: 55, height: 55, marginTop: 43}}>
            <Image source={Img} style={{ width: 50,  height: 50, margin: "auto" }} />
        </View>
    )
}