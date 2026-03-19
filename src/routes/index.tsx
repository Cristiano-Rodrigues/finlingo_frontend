import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import { RootStack } from "./RootStack";
import { ScreenContainer } from "react-native-screens";
import { WelCome } from "../screens/WellCome/WellCome";


export function Routes() {
    return(
        <>
            <NavigationContainer >
                <TabRoutes>
                    
                </TabRoutes>
            </NavigationContainer>    
        </>
    )
}