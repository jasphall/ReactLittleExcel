import React from "react";
import * as ReactDOM from "react-dom";
import LittleExcel from "./components/LittleExcel";

const containerEl = document.getElementById("app");

const headers = [
    "Tytuł", "Autor", "Język", "Rok wydania", "Sprzedaż"
];

const data = [
    [   "Don Quixote",	"Miguel de Cervantes",	"Spanish",	"1605", "500 million" ],
    [   "A Tale of Two Cities",    "Charles Dickens",	"English",	"1859",	"200 million" ],
    [   "The Lord of the Rings",	"J. R. R. Tolkien",	"English",	"1954",	"150 million" ],
    [   "Le Petit Prince (The Little Prince)",	"Antoine de Saint-Exupéry",	"French",	"1943",	"140 million"   ],
    [   "Harry Potter and the Philosopher's Stone",	"J. K. Rowling",	"English",	"1997",	"120 million"   ],
    [   "The Hobbit",	"J. R. R. Tolkien",	"English",	"1937",	"100 million"   ],
    [   "And Then There Were None",	"Agatha Christie",	"English",	"1939",	"100 million"   ],
    [   "Alice in Wonderland",	"Lewis Carroll",	"English",	"1865",	"100 million"   ]
];

class MainApp extends React.Component {

    renderLitleExcel() {
        return (
            <LittleExcel headers={headers} initialData={data} />
        );
    }

    render() {
        return (
            <div className="app">
                {this.renderLitleExcel()}
            </div>
        )
    }

}

ReactDOM.render(
    <MainApp/>,
    containerEl
);