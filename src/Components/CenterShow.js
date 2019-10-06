import React from "react"
import shapesList from "../Shapes/ShapesList"
import "../Styles/CenterShow.css"
import "../Styles/ShapesNav.css"
class CenterShow extends React.Component {
    constructor() {
        super();
        this.state = {
            shapesList,
            displayShape: "square",
            positions:[{xNew:0},{yNew:0},{xOld:0},{yOld:0}]
        }
        this.AddShape = this.AddShape.bind(this);
        this.moveShape = this.moveShape.bind(this);

    }
    AddShape = param => this.setState({ displayShape: param })
    moveShape = e => {
        e=e || window.event;
        e.preventDefault();
   
    }
 
    render() {
        return (
            <span className="center-container">
                <div>
                    <div>
                        <ul className="button-list">
                            {shapesList.map(item => {
                                return <li className="shape-list-item" key={item.id}>
                                    <button className="shape-button" onClick={() => this.AddShape(item.class)}>{item.shape}</button>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="CenterShow">
                    <div className="shapeHeader">
                        <div className={`${this.state.displayShape} shapeDiv`} onClick={this.moveShape}>
                    </div>
                    </div>

                </div>
            </span>
        )
    }
}
export default CenterShow