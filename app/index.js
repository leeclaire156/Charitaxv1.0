// Think of View as a div and Text as a p or heading element
import { View, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';

const Home = () => {
    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='login'
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home;