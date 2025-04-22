import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import authService from "../../redux/slices/auth/authService";
import { loginSuccess } from "../../redux/slices/auth/authSlice";

const MainNavigator = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const token = await authService.getToken(); 
        if (token) {
          dispatch(loginSuccess(token));
        }
      } catch (error) {
        console.log("Error restoring session:", error);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );

};

export default MainNavigator;
