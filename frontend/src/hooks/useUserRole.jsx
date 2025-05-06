import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const useUserRole = () => {
    const [role, setRole] = useState("loading");
  
    useEffect(() => {
      const fetchUserRole = async () => {
        const user = auth.currentUser;
        if (user) {
          try {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setRole(userData.role); // "admin" or "user"
            } else {
              setRole("none"); 
            }
          } catch (error) {
            console.error("Error fetching user role:", error);
            setRole("error");
          }
        } else {
          setRole("none"); 
        }
      };
  
      fetchUserRole();
    }, []);
  
    return role;
  };
  

  export default useUserRole;