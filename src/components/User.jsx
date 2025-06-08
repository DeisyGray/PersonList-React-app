import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import { IoMdTrash } from "react-icons/io";


export default function User({ user, handleDelete, boyStyle, girlStyle }) {
  return (
    <>
      <li style={user.gender == "male" ? boyStyle : girlStyle}>
        <img
          src={user.gender == "male" ? boy : girl}
          alt="boy"
          width={50}
          height={50}
        />
        <p>
          {user.name} - {user.age} - {user.gender}
        </p>
        <div className="control">
          <span onClick={() => handleDelete(user.id)}><IoMdTrash size={30} /></span>
        </div>
      </li>
    </>
  );
}
