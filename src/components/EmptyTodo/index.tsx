import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./style";

export function EmptyTodo() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color="#333333" />
      <Text style={styles.emptyTextOne}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyTextTwo}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
