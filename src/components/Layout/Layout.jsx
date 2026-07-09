import "./Layout.css";
import Button from "../Button/Button";

function Layout({ children }) {
  return (
    <div className="layout">
      <Button>PrepVerse Button</Button>

      <br />
      <br />

      {children}
    </div>
  );
}

export default Layout;