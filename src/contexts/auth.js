import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  return <AuthContext value={{ token: "" }}>{children}</AuthContext>;
}
