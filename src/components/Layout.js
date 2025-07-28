import Navbar from './Navbar';
import Footer from '../components/Footer';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;