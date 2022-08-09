import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [listGoals, setListGoals] = useState([]);

  function addGoalHandle(goalEntreText) {
    setListGoals((currentListGoals) => [
      ...currentListGoals,
      { text: goalEntreText, id: Math.random().toString() },
    ]);
  }

  function handlerDelete(id) {
    setListGoals((currentListGoals) => {
      return currentListGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput
        onAddGoal={addGoalHandle}
        placeholder="Your course goal!"
        title="Add Goal"
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={handlerDelete}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },
});
