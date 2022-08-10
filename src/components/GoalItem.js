import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#FF9677", borderRadius: 6 }}
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
    backgroundColor: "#FBC4AB",
    borderRadius: 6,
    width: "auto",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    fontSize: 17,
    color: "#000",
    padding: 8,
  },
});
