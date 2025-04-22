import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Button} from 'react-native-paper'
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  

  const handleLogout = async () => {
    try {
      await dispatch(logout()); 
      console.log("Logged Out");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcom To SHOPPERS</Text>
      {isAuthenticated ? (
        <View>
          <Text>Welcome, SHOPPERS!</Text>
          <Button onPress={handleLogout}>Logout</Button>
        </View>
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
