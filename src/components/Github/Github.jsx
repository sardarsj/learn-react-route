import React, { useEffect } from "react";
import { useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sardarsj")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="mt-2 flex flex-row justify-center items-center ">
      <img
        className="text-center rounded-full"
        height={200}
        width={200}
        src={data.avatar_url}
        alt=""
      />
      <div className="ml-3 flex flex-col">
        <div className="text-2xl font-bold">{data.name}</div>
        <div>Followers: {data.followers}</div>
        <div>Following: {data.following}</div>
      </div>
    </div>
  );
}

export default Github;
