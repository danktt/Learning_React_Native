import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Logo from "../../assets/images/goal.png";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={Logo} style={styles.logoImage} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder={props.placeholder}
          value={goalEntreText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#F54768" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#F54768" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 36,
    alignItems: "center",

    backgroundColor: "#052B6B",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#2C4251",
    backgroundColor: "#C1C1C1",
    width: "100%",
    padding: 10,
    marginRight: 8,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
});
