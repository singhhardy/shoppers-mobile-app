import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const MainNavigator = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />
}

export default MainNavigator