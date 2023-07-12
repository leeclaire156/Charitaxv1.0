// Think of View as a div and Text as a p or heading element
import {SafeAreaView, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, {useState} from 'react';

const Home = () => {
    return(
        <SafeAreaView>
            <Text>Home</Text>
            <TextInput defaultValue='Username'></TextInput>
            <TextInput defaultValue='Password'></TextInput>
        </SafeAreaView>
    )
}

export default Home;