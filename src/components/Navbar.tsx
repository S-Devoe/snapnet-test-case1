import { SiEventbrite } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";

interface PropsType {
  setSearchQuery?: any;
  handleSearch?: () => void
}

const Navbar = ({ setSearchQuery, handleSearch }: PropsType) => {
  return (
    <nav className="navbar">
      <SiEventbrite color="black" size={40} />

      <div className="search-input">
        <input
          type="text"
          placeholder="Search for event"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="icon-btn" onClick={handleSearch} >
          <RiSearchLine color='white' />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
