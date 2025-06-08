import { MdSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import "./Header.css";
const Header = ({ title, theme, setTheme }) => {
  function toggleTheme(){
      if(theme==="light"){
        setTheme("dark")
      }else{
        setTheme("light")
      }
  }

  return (
    <nav>
      <h1 style={{ fontFamily: "sans-serif" }} >{title}</h1>
      <span onClick={toggleTheme}>
        {theme === "light"? <MdSunny size={30}/> : <MdNightlight size={30}/>}
      </span>
    </nav>
  );
};

export default Header;
