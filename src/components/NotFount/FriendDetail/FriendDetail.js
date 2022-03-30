import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  //   const params = useParams();
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    // console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      {/* <h3>Thi is detail about Dosto: {params.friendId}</h3> */}
      <h3>Thi is detail about Dosto: {friendId}</h3>
      <h3>name: {friend.name}</h3>
      <h4>email: {friend.email}</h4>
      <h4>website: {friend.website}</h4>
      <p>
        <small>City:{friend.address?.city}</small>
      </p>
      <p>
        <small>Lat:{friend.address?.geo.lat}</small>
      </p>
    </div>
  );
};

export default FriendDetail;
