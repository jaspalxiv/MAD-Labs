import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Basket() {
    const router = useRouter();

    // Default values for color and width, replace these with actual logic or props
    const color = "blue";
    const width = 100;

    return (
        <View style={styles.container}>
            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: color, width: width }]}
                    onPress={() => router.push("./apple")}
                >
                    <Text style={styles.buttonText}>Apple</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: color, width: width }]}
                    onPress={() => router.push("./orange")}
                >
                    <Text style={styles.buttonText}>Orange</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: color, width: width }]}
                    onPress={() => router.push("./mango")}
                >
                    <Text style={styles.buttonText}>Mango</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: "center",
    },
    bullet: {
        fontSize: 16,
        marginRight: 8,
    },
    item: {
        fontSize: 16,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
