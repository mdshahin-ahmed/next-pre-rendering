import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
