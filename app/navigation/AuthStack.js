import { Pressable, Text } from "react-native";
import { Link } from 'expo-router';

const AuthStack = () => {
    return (
        <>
            <Link href="/Onboard">Onboard</Link>
            <Link href="/login" replace asChild>
                <Pressable>
                    <Text>
                        Login
                    </Text>
                </Pressable>
            </Link>
        </>
    );
};

export default AuthStack;