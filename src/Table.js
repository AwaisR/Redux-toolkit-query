import { Link } from "react-router-dom";
import "./App.css";
import { useGetAllUsersQuery, useAddUserMutation } from "./UserQuery";
function Table() {
  const [addUser] = useAddUserMutation();
  const { data, error, isLoading } = useGetAllUsersQuery();
  const users = {
    id: "11",
    name: "Awais",
    email: "sjsshhd",
  };
  const hanldeAdd = async () => {
    await addUser(users);
  };

  if (isLoading) {
    return <h1> wait loading..............</h1>;
  }
  if (data) {
    return (
      <div>
        <h1>User Table with Redux tool kit Query</h1>
        <div>
          <table id="customers">
            <tr>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>Action</th>
            </tr>
            {data.map(({ username, email, phone, id }) => (
              <tr>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <Link to={`user/${id}`}>User</Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <button onClick={hanldeAdd}>Add User</button>
      </div>
    );
  }
}

export default Table;
