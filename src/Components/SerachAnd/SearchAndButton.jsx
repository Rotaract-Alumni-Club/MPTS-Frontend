import { FaPlus, FaSearch } from "react-icons/fa";
import "../../SCSS/AdminStyles/AdminProjectStyles/SearchAndButton.scss"


const SearchAndButton = () => {
    return (
        <div>
            <div className="search_and_button">    
                <button><FaSearch /> </button>
                <h4>{"title1"}</h4>
            </div>
            <div className="search_and_button">
                <button><FaPlus /> </button>
                <h4>{"title2"}</h4>
            </div>
        </div>
    );
}
export default SearchAndButton;