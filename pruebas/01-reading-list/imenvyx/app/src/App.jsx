import NavBar from "./Layouts/Navbar";
import ListBook from "./views/ListBook";

function App() {
  /* const [isDarkMode, setIsDarkMode] = useState(false); */

  /* const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }; */
  return (
    <div className="light">
      <NavBar />
      <ListBook />
    </div>
  );
}

export default App;
