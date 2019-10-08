import React from "react"
import shapesList from "../Shapes/ShapesList"
import "../Styles/CenterShow.css"
import "../Styles/ShapesNav.css"
import MovableShape from "./MovableShape"
export default class CenterShow extends React.Component {
    constructor() {
        super();
        this.state = {
            shapesList,
            displayShape: "square",
            startX: "",
            startY: "",
            CenterCoordX: 0,
            CenterCoordY: 0,

        }
        this.AddShape = this.AddShape.bind(this);
        this.ReferenceCorridinates = this.ReferenceCorridinates.bind(this);
        this.setStart = this.setStart.bind(this);
    }
    AddShape = param => {
        this.setState({ displayShape: param })
    }

    setStart = e => {
        this.setState({ startX: e.clientX, startY: e.clientY })

    }

    ReferenceCorridinates = (e) => {
        this.setState({ CenterCoordX: e.pageX, CenterCoordY: e.pageY })
    }

    render() {
        return (
            <span className="center-container">
                <div>
                    <div>
                        <ul className="button-list">
                            {shapesList.map(item => {
                                return <li className="shape-list-item" key={item.id}>
                                    <button className="shape-button" onClick={() => this.AddShape(item.class)}>
                                        {item.shape}
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="CenterShow" onMouseMove={this.ReferenceCorridinates}>

                    <MovableShape class={this.state.displayShape} onMouseDown={() => this.setStart}
                        currentX={this.state.CenterCoordX} currentY={this.state.CenterCoordY}
                        startX={this.state.startX} startY={this.state.startY} />


                </div>
            </span>
        )
    }
}
