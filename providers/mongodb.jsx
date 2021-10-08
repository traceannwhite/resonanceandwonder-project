import React, { useContext, useEffect, useState } from "react";

import { useRealmApp } from "./realm";

const MongoDBContext = React.createContext(null);

const MongoDB = ({ children }) => {
  const { user } = useRealmApp();
  const [db, setDb] = useState(null);

  useEffect(() => {
    if (user !== null) {
      const realmService = user.mongoClient(
        process.env.NEXT_APP_REALM_SERVICE_NAME
      );
      setDb(realmService.db(process.env.NEXT_APP_DB_NAME));
    }
  }, [user]);

  return (
    <MongoDBContext.Provider
      value={{
        db,
      }}
    >
      {children}
    </MongoDBContext.Provider>
  );
};

export const useMongoDB = () => {
  const mdbContext = useContext(MongoDBContext);
  if (mdbContext == null) {
    throw new Error("useMongoDB() called outside of a MongoDB?");
  }
  return mdbContext;
};

export default MongoDB;
