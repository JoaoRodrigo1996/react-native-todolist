import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface TaskItemProps {
  id: string;
  title: string;
  done: boolean;
  onRemove: (id: string) => void;
  onToggleTodoIsDone: (id: string) => void;
}

export function TaskItem(data: TaskItemProps) {
  function handleRemoveTodo() {
    data.onRemove(data.id);
  }

  function handleToggleTodoIsDone() {
    data.onToggleTodoIsDone(data.id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          style={styles.taskButton}
          onPress={handleToggleTodoIsDone}
        >
          <View style={data.done ? styles.checkboxDone : styles.checkbox}>
            {data.done && <Feather name="check" size={12} color="#F2F2F2" />}
          </View>
          <Text style={data.done ? styles.textDone : styles.text}>
            {data.title}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.trashButton} onPress={handleRemoveTodo}>
          <Feather name="trash-2" size={22} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
