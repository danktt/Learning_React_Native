import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const [listGoals, setListGoals] = useState([]);

  function startAddGoalHandler() {
    setIsShowModal(true);
  }
  function endAddGoalHandler() {
    setIsShowModal(false);
  }
  function addGoalHandle(goalEntreText) {
    if (goalEntreText !== "") {
      setListGoals((currentListGoals) => [
        ...currentListGoals,
        { text: goalEntreText, id: Math.random().toString() },
      ]);
      endAddGoalHandler();
    }
  }

  function handlerDelete(id) {
    setListGoals((currentListGoals) => {
      return currentListGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <Button
            title="Add New Goal"
            color="#F54768"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onAddGoal={addGoalHandle}
          placeholder="Your course goal!"
          title="Add Goal"
          visible={isShowModal}
          onCancel={endAddGoalHandler}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
    backgroundColor: "#003554",
  },

  goalContainer: {
    flex: 5,
  },
});
