import { StatusBar} from 'expo-status-bar';
import { StyleSheet } from "react-native"
import Home from './screens/Home/Home';
import Category from './screens/Category/Category';
import Game from './screens/Game/Game';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import Game2 from './screens/Game2/Game2';
import Login from './screens/Login/Login';
import ModalWrong from './components/ModalWrong/ModalWrong';
import { createStackNavigator } from "@react-navigation/stack" 
import Signin from './screens/Singin/Singin';

//import ModalRight from './components/ModalRight/ModalRight';

function ModalScreen() {
  const navigation = useNavigation()
  return (
    <ModalWrong />
  )
}


const HomeStack = createStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      }
    },
    Login: {
      screen: Login,
      options: {
        headerShown: false
      }
    },
    Signin: {
      screen: Signin,
      options: {
        headerShown: false,
      }
    },
    Category: {
      screen: Category,
      options: {
        headerShown: false,
      }
    },
    Game: {
      screen: Game,
      options: {
        headerShown: false,
      }
    },
    Game2: {
      screen: Game2,
      options: {
        headerShown: false,
      }
    }
  }
})

const RootStack = createStackNavigator({
  groups: {
    Home: {
      screens: {
        App: {
          screen: HomeStack,
          options: { headerShown: false }
        },
      },
    },
    Modal: {
      screenOptions: {
        presentation: "Modal",
      },
      screens: {
        MyModal: ModalScreen,
      }
    }
  }
})


const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <> 
      <Navigation />
      <StatusBar />
    </>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF"
  }
})