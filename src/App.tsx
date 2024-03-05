import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import SideNavbar from "./components/sidenavbar/SideNavbar.tsx";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Navbar></Navbar>
        <div className="sidenavbarContainer">
          <SideNavbar></SideNavbar>
          <div></div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
