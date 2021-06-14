import Navbar from "./Navbar";

function MasterPage({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {children}
    </div>
  );
}

export default MasterPage;
