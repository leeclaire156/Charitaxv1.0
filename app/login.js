// Think of View as a div and Text as a p or heading element
import { SafeAreaView, Text, CheckBox, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';

const LoginScreen = () => {
    // const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <SafeAreaView>
            {/* <Button onPress={()=> router.back()} title="Go back"></Button> */}
            <Link href="/">
                <Button title="Go Back"></Button>
            </Link>
            <Text>Login</Text>
            <TextInput
                defaultValue='Email'
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                defaultValue='Password'
                secureTextEntry={!isSelected}
                onChangeText={(password) => setPassword(password)}
            />
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                title="Show"
            ></CheckBox>
            <Text>Show Password</Text>
            <Button title="Login"></Button>
            <Button title="Create an Account"></Button>
        </SafeAreaView>
    )
}

export default LoginScreen;