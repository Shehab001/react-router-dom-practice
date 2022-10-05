import React from "react";
import { useLoaderData } from "react-router-dom";

const FriednDetails = () => {
  const user = useLoaderData();
  // console.log(user.name);
  const { id, name, username, email, website, phone, address, company } = user;
  return (
    <div>
      <h1 className="text-4xl m-5">
        Details About <span className="text-emerald-300	">{name}</span>
      </h1>
      <div class="mx-auto bg-eme p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img alt="robots" src={`https://robohash.org/${id}?200x200`} />

        <p>➢ Username : {username}</p>
        <p>➢ E-mail : {email}</p>
        <p>➢ Website : {website}</p>
        <p>➢ Phone : {phone}</p>
        <p className="">➢ Website : {website}</p>
        <p>
          ➢ Address : {address.street}, {address.city}
        </p>
        <p>➢ Company : {company.name}</p>
      </div>
    </div>
  );
};

export default FriednDetails;
