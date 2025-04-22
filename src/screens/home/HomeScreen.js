import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcom To SHOPPERS</Text>
      {isAuthenticated ? (
        <Text>Welcome, SHOPPERS!</Text>
      ) : (
        <Text>You are not logged in.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F2F4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
