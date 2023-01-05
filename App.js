import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState();
  const [courseGoal, setCourseGoal] = useState([]);
  function goalInputHandeler(enteredText) {
    setEnteredText(enteredText);
  }
  function addGoalHandeler() {
    setCourseGoal((currentGoal) => {
      return [...currentGoal, { text: enteredText, id: Math.random().toString() }]
    }
    );
  }
  return (
    <View style={styles.appContainer} >
      <View style={styles.inpContainer}  >
        <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandeler} />
        <Button title='Add Goal' style={styles.button} onPress={addGoalHandeler} />
      </View>
      <FlatList data={courseGoal} renderItem={(itemData) => {
        return (<View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>);
      }}
        keyExtractor={(item, index) => {
          return item.id;
        }} />


    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    width: "100%",
  },
  inpContainer: {
    flexDirection: "row",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    paddingLeft: 8
  },
  goalItem: {
    width: "100%",
    padding: 8,
    marginVertical: 5,
    borderRadius: "10px",
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white"

  }
});
