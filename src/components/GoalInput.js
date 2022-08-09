import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [goalEntreText, setGoalEntreText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalEntreText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(goalEntreText);
    setGoalEntreText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder={props.placeholder}
        value={goalEntreText}
      />
      <Button title={props.title} onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
