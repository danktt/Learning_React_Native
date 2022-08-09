import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#006C67", borderRadius: 6 }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#10FFCB",
    borderRadius: 6,
    width: "auto",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "black",
    padding: 8,
  },
});
