import { useContext } from "react";
import { AuthContext } from "../assets/hoc/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
};

