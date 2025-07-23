import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2025 Evandro Maciel</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: "auto",
  },
  footerText: {
    color: "#999",
    fontSize: 12,
  },
});

export default Footer;
