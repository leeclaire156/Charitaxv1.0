// Think of View as a div and Text as a p or heading element
import { SafeAreaView, Text, CheckBox } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Button } from 'react-native-web';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <SafeAreaView>
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
            ></CheckBox>
            <Text>Show Password</Text>
            <Button>Login</Button>
        </SafeAreaView>
    )
}

export default Login;