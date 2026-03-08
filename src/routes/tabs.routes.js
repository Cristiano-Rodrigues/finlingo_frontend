import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../../screens/Home/Home"

const {Navigator, Screen} = createBottomTabNavigator

export default function TabRoutes() {
    return(
        <Navigator
        ScreenOptions={{
            tabBarsStyle: {
                backgroundColor: "#0476BD"
            }
        }}>
            <Screen nome="Home" component={Home}/>
        </Navigator>
    )
}