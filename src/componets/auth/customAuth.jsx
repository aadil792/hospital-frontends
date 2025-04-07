import { useEffect, useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/check-session", {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedIn(res.data);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);
  return isLoggedIn;
};
