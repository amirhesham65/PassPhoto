import { useState, useEffect } from 'react';
import { firebaseFirestore } from '../config/firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState();

  useEffect(() => {
    const unsubscribe = firebaseFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
}

export default useFirestore;