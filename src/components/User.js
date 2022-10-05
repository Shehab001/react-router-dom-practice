import React from "react";
import "flowbite";
import { Link } from "react-router-dom";

const User = (props) => {
  const { id, name, username, email, phone, website } = props.user;
  // console.log(props);
  // console.log(props.user.id);
  return (
    <div className="">
      <div class="	bg-teal-100			 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {id}. {name}
          </h5>
        </a>
        <p>➢ Username : {username}</p>
        <p>➢ E-mail : {email}</p>
        <p>➢ Phone : {phone}</p>
        <p className="mb-5">➢ Website : {website}</p>
        <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <p>
            <Link className="text-xl " to={`/friend/${id}`}>
              See More
            </Link>
          </p>
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default User;
