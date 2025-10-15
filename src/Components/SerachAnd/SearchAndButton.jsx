import { FaPlus, FaSearch } from "react-icons/fa";
import "../../SCSS/AdminStyles/AdminProjectStyles/SearchAndButton.scss"


const SearchAndButton = ({title1, title2}) => {
    return (
        <div className="search_and_button">
            <button><FaSearch /></button>
            <h4>{title1}</h4> &nbsp; &nbsp; &nbsp; &nbsp;
            <button><FaPlus /></button>
            <h4>{title2}</h4>
        </div>
    );
}
export default SearchAndButton;