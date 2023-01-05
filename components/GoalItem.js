import { Pressable, StyleSheet, Text, View } from "react-native"

const GoalItem = ({ id, text, onDeleteItem }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                style={
                    ({ pressed }) => pressed && styles.press
                }
                onPress={onDeleteItem.bind(this, id)}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        width: "100%",
        marginVertical: 5,
        borderRadius: "10px",
        backgroundColor: "#5e0acc",
    },
    press: {
        backgroundColor: "red"
    },
    goalText: {
        color: "white",
        padding: 8,
        borderRadius: "10px",


    }
})