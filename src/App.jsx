import Header from "./components/Header";
import PersonList from "./components/personList";
import AddForm from "./components/AddForm";
import "./App.css";
import { useState , useEffect} from "react";
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John",
      age: 30,
      gender: "male",
    },
    {
      id: 2,
      name: "Jane",
      age: 25,
      gender: "female",
    },
    {
      id: 3,
      name: "Bob",
      age: 40,
      gender: "male",
    },
    {
      id: 4,
      name: "Alice",
      age: 35,
      gender: "female",
    },
    {
      id: 5,
      name: "Tom",
      age: 20,
      gender: "male",
    },
    {
      id: 6,
      name: "Sara",
      age: 45,
      gender: "female",
    },
  ]);

  function handleDelete(id) {
    const result = data.filter((user) => user.id !== id);
    setData(result);
  }

  const [theme, setTheme] = useState(localStorage.getItem('mode') || 'light');

    useEffect(() => {
      localStorage.setItem('mode', theme);
    }, [theme]);

  return (
    <div className={theme}>
    <div className="App">
      <Header title="P E R S O N  L I S T  A P P" theme={theme} setTheme={setTheme} />
      <main>
        <AddForm propData={data} setData={setData}/>
        <PersonList propData={data} handleDelete={handleDelete} />
      </main>
    </div>
    </div>
  );
}

export default App;
