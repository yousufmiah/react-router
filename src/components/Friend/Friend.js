import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  // console.log(props.friend.name);

  const navigate = useNavigate();

  const { name, username, id } = props.friend;

  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h3>Name:{name}</h3>
      <Link to={"/friend/" + id}>Show Detail</Link>
      <button onClick={showFriendDetail}>
        {username} id: {id}
      </button>
    </div>
  );
};

export default Friend;
