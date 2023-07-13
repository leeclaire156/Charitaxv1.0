import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen;