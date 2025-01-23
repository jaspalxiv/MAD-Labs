

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Yoy may Press</Text>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Realy", "Nuke, you should not have press")}>
                <Text>Press me</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'

    }
});
