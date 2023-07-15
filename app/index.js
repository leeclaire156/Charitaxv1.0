// Think of View as a div and Text as a p or heading element
import React from 'react';
import { View } from 'react-native';


import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

const Home = () => {
    return (
        <View>
            {/* <AppStack /> */}
            <AuthStack />
        </View>
    );
}

export default Home;