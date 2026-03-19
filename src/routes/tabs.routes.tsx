import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home/Home"
import { LeaderBorder } from "../screens/LeaderBorder/LeaderBorder"
import { User } from "../screens/User/User"
import { HomeImage } from "../components/HomeImage/HomeImage"
import { LbImage } from "../components/LbImage/LbImage"
import { UserImage } from "../components/UserImage/UserImage"



const {Navigator, Screen} = createBottomTabNavigator()

export function TabRoutes() {
    return(
        <Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#0597F2",
                    height: 100,
                    alignItems: "center",
                    borderTopEndRadius: 25,
                    borderTopLeftRadius: 25,
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
            }}>
            <Screen name="Leader Boder" component={LeaderBorder} 
            options={{
                headerShown: false, 
                tabBarIcon: () => (
                    <LbImage />
                )
            }}/>
            <Screen name="Home" component={Home} options={{
                title: "Finlingo",
                headerStyle: {
                    backgroundColor: "#0597F2",
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    height: 140,
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 30,
                    marginHorizontal: "34%" ,
                },
                tabBarIcon: () => (
                    <HomeImage />
                )
            }}  />
            <Screen name="User" component={User} 
            options={{
                tabBarIcon: () => (
                    <UserImage />
                )
            }}/>
        </Navigator>
    )
}