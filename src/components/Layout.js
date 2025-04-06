import Navbar from './Navbar';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;