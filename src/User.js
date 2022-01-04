import React from "react";
import { useParams } from "react-router-dom";
import { useGetUsersByIdQuery } from "./UserQuery";
export default function User(props) {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUsersByIdQuery(id);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Individual User Data</h1>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>email</th>
          <th>phone</th>
        </tr>
        <tr>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
        </tr>
      </table>
    </div>
  );
}
