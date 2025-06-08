import { useState } from "react";
import "./personList.css";
import User from "./User";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
export default function PersonList(props) {
  const { propData } = props;
  const { handleDelete } = props;

  const [show, setShow] = useState(true);

  const myStyle = props.Mystyle || {
    
    fontFamily: "sans-serif",
  };

  const boyStyle = props.boyStyle || {
    border: "5px solid skyblue",
    borderRadius: "10px",
  };
  const girlStyle = props.girlStyle || {
    border: "5px solid pink",
    borderRadius: "10px",
  };

  return (
    <div className="container">
      <div className="header">
        <h1 style={myStyle}> <IoPerson size={30} /> P E R S O N L I S T</h1>
        <span onClick={() => setShow(!show)}>
          {show ? <IoEye size={30} /> : <IoEyeOff size={30} />}
        </span>
      </div>
      <ul>
        {show &&
          propData.map((user) => (
            <User
              key={user.id}
              user={user}
              handleDelete={handleDelete}
              boyStyle={boyStyle}
              girlStyle={girlStyle}
            />
          ))}
      </ul>
    </div>
  );
}
