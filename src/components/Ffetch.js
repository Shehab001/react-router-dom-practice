import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Ffetch = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl mb-10">Fetched {users.length} User.</h1>
      <div className="grid grid-cols-3 gap-4 ml-4">
        {users.map((user) => {
          return <User user={user}></User>;
        })}
      </div>
    </div>
  );
};

export default Ffetch;
