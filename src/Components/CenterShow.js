import React from "react"
import shapesList from "../Shapes/ShapesList"
import "../Styles/CenterShow.css"
import "../Styles/ShapesNav.css"
import MovableShape from "./MovableShape";
export default class CenterShow extends React.Component {
    constructor() {
        super();
        this.shapeContainterPos = React.createRef();
        this.state = {
            shapesList,
            displayShape: "square",
            prevX: 0,
            prevY: 0,
            containerBound: {},
            shapeStyle: {
                marginTop: "0",
                marginLeft: "0"
            },
        }
        this.AddShape = this.AddShape.bind(this);
        this.prevMousePosition = this.prevMousePosition.bind(this);
    }
    AddShape = param => {
        this.setState({ displayShape: param })
    }

    prevMousePosition = e => {
        this.setState({ prevX: e.clientX, prevY: e.clientY })
    }
  
    componentDidMount() {
        this.setState({ containerBound: this.shapeContainterPos.current.getBoundingClientRect() })
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
                <div id="CenterShow" ref={this.shapeContainterPos} >
                    <div >
                            <MovableShape class={this.state.displayShape}
                    prevx={this.state.prevX} prevy={this.state.prevY} 
                    containerbound = {this.state.containerBound} 
                        style={this.state.shapeStyle} containerDiv={this.shapeContainterPos}/>
                    </div>
                </div>
            </span>
        )
    }
}
