import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My Todo List</Text>

        {/* Add Task Form */}
        <ToDoForm onAddTask={addTask} />

        {/* Task List */}
        <ToDoList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {/* Navigation to About Screen */}
        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.aboutButtonText}>About</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  aboutButton: {
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  aboutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
