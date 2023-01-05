import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandeler() {
    setModelIsVisible(true);
  }
  function endMobileVisibleHandeler() {
    setModelIsVisible(false);
  }

  function addGoalHandeler(enteredText) {
    setCourseGoal((currentGoal) => {
      return [...currentGoal, { text: enteredText, id: Math.random().toString() }]
    }
    );
    endMobileVisibleHandeler();
  }
  function deleteGoalHandeler(id) {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer} >
        <Button title='add new goal' color="white" onPress={startAddGoalHandeler} />
        <GoalInput visible={modelIsVisible} addGoal={addGoalHandeler} onCancel={endMobileVisibleHandeler} />


        <FlatList data={courseGoal} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandeler} />
          );
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }} />


      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#1e085a",
    height: "100%"
  },


});
