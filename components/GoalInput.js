import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native"



const GoalInput = (props) => {

    const [enteredText, setEnteredText] = useState();
    function goalInputHandeler(enteredText) {
        setEnteredText(enteredText);
    }
    function addGoalHandeler() {
        props.addGoal(enteredText);
        setEnteredText("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inpContainer}  >
                <Image source={require("../assets/adaptive-icon.png")} style={styles.image} />
                <TextInput placeholder='Your course goal...' value={enteredText} style={styles.textInput} onChangeText={goalInputHandeler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandeler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inpContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        width: "100%",
        padding: 16,
        backgroundColor: "#e4d0ff",
        borderRadius: 5,
        color: "#120438"

    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        marginTop: -200,
        backgroundColor: "white",
        borderRadius: 50
    },

})