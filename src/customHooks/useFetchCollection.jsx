import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "@/firebase/configFirebase";

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = () => {
    setIsLoading(true);

    try {
      const docRef = collection(db, collectionName);
      const q = query(docRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(allData);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;
