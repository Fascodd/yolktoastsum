import React from "react"
import "../Styles/Navbar.css"
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            navHeader: [{ name: "item1", ID: 1 }, { name: "item2", ID: 2 }, { name: "item1", ID: 3 }]
        }
    }
    render() {
        return (
            <div>
                <ul className="main-nav">
                    {this.state.navHeader.map(item => {
                        return <li key={item.ID} className="navHeader-li"> {item.name} </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Navbar 