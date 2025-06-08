import { useState } from "react";
import "./AddForm.css";
import { IoPersonAdd } from "react-icons/io5";
export default function AddForm(props) {
    const { propData,setData } = props;


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            id:Math.floor(Math.random()*100),
            name: name,
            age: age,
            gender: gender,
        }
        console.log(user);
        setData([...propData, user]);
        setName('');
        setAge('');
        setGender('male');
    }

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input type="text"value={name} onChange={(event)=>setName(event.target.value)}/>
        <label> Age: </label>
        <input type="number" value={age} onChange={(event)=>setAge(event.target.value)}/>
        <select value={gender} onChange={(event)=>setGender(event.target.value)}>
          <option> male </option>
          <option> female </option>
        </select>
        <span>
          <button type="submit" className="btn-save" disabled={name.trim() === ""}><IoPersonAdd size={20} /></button>
        </span>
        
      </form>
    </section>
  );
}
