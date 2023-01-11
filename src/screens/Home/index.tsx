import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/images/logo.svg";
import { EmptyTodo } from "../../components/EmptyTodo";
import { TaskItem } from "../../components/TaskItem";

import { styles } from "./style";

interface TodoListData {
  id: string;
  title: string;
  done: boolean;
}

export function Home() {
  const [todoList, setTodoList] = useState<TodoListData[]>([]);
  const [todo, setTodo] = useState("");

  function handleCreateTodo(title: string) {
    const newTodo = {
      id: String(Math.random()),
      title,
      done: false,
    };

    setTodoList((state) => [...state, newTodo]);
    setTodo("");
  }

  function handleRemoveTodo(id: string) {
    setTodoList((state) => state.filter((todo) => todo.id !== id));
  }

  function handleToggleTaskIsDone(id: string) {
    const updatedTodo = todoList.map((todo) => ({ ...todo }));
    const todoExist = updatedTodo.find((todo) => todo.id === id);

    if (!todoExist) {
      return;
    }

    todoExist.done = !todoExist.done;
    setTodoList(updatedTodo);
  }

  function taskDone() {
    const initialValue = todoList.length;
    const done = todoList.filter((todo) => todo.done !== true);

    return initialValue - done.length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoSvg width={RFValue(110)} height={RFValue(32)} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={todo}
            onChangeText={setTodo}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCreateTodo(todo)}
          >
            <Text style={styles.buttonIcon}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taskList}>
          <View style={styles.taskHeader}>
            <View style={styles.taskCreated}>
              <Text style={styles.textCreated}>criadas</Text>
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{todoList.length}</Text>
              </View>
            </View>
            <View style={styles.taskDone}>
              <Text style={styles.textDone}>concluídas</Text>
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{taskDone()}</Text>
              </View>
            </View>
          </View>
          <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem
                id={item.id}
                title={item.title}
                done={item.done}
                onRemove={handleRemoveTodo}
                onToggleTodoIsDone={handleToggleTaskIsDone}
              />
            )}
            ListEmptyComponent={() => <EmptyTodo />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
