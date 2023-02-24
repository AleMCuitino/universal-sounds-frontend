import { useState } from "react";
import "./Search.css";
var data = require("../../data/data.json");

export default function App() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    return (
        <div className="App">
            <h1>Search</h1>

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <button onClick={() => onSearch(value)}> Search </button>
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.bandName.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.bandName)}
                                className="dropdown-row"
                                key={item.bandName}
                            >
                                {item.bandName}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
