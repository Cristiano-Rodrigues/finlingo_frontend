import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelCome } from '../screens/WellCome/WellCome';
import { Cadastro } from '../screens/Cadastro/Cadastro';
import { LogIn } from '../screens/LogIn/LogIn';
import { Home } from '../screens/Home/Home';


const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <>
    <Stack.Navigator initialRouteName="Welcome" >
      <Stack.Screen name="Welcome" component={WelCome} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='LogIn' component={LogIn} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    </>
  );
}