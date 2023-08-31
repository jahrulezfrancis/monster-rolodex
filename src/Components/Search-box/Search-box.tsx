import "./Search-box.css"
import { ChangeEvent } from "react";

type SearchBar = {
    className: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

const SearchBar = ({ className, placeholder, onChange }: SearchBar) => {
    return (
        <div>
            <input className={`search-box ${className}`} placeholder={placeholder} type="search" onChange={onChange} />
        </div>
    )
}

export default SearchBar;