import React from "react";
import { StyleSheet, View } from "react-native";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
