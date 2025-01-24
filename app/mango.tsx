import { StyleSheet, Image, View } from "react-native";

export default function Apple() {
    return (
        <View style={styles.container}>

            <Image style={styles.picture} source={require("../assets/mango.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    picture: {
        width: 100,
        height: 100,
    },
});