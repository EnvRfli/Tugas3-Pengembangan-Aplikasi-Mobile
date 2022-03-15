import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1';
import Screen2 from './Screens/Screen2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
        header: () => null
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;