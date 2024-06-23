import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Kushal3502")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center">
      <img src={data.avatar_url} />
      <p>Public Repos : {data.public_repos}</p>
    </div>
  );
}

export default Github;

export async function loadData() {
  const response = await fetch("https://api.github.com/users/Kushal3502");
  return response.json();
}
