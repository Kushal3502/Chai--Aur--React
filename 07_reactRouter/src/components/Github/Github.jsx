import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Kushal3502")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-white text-2xl">
      <img src={data.avatar_url} width={300} />
      <h1>Name : {data.name}</h1>
      <h1>Public repos : {data.public_repos}</h1>
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Kushal3502");
  return response.json();
};
