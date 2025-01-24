import { StyleSheet, Text, View } from "react-native";

export default function basket() {
    return (
        <View style={styles.container}>
            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.item}>Apple</Text>
            </View>

            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.item}>Orange</Text>
            </View>

            <View style={styles.listItem}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.item}>Mango</Text>
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
    itemText: {
        fontSize: 16,
    },



});