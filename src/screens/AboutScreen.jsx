import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = ({ navigation }) => {
  const getCurrentDate = () => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.appName}>My Todo App</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Developer:</Text>
            <Text style={styles.value}>Your Name</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Current Date:</Text>
            <Text style={styles.value}>{getCurrentDate()}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              A simple and intuitive todo list app to help you stay organized
              and manage your daily tasks efficiently.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: "#333",
    fontWeight: "400",
  },
  descriptionContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AboutScreen;
