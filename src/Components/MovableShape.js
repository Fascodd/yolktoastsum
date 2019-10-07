import React from "react"

export default class MovableShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draggable: false,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        }
        this.moveShape = this.moveShape.bind(this);
        this.findDeltas = this.findDeltas.bind(this);
        this.noMove = this.noMove.bind(this);
    }
    moveShape = () => {
        this.props.onMouseDown();
        this.setState({ draggable: true })
        this.setState({ startX: this.props.currentX, startY: this.props.currentY })
    }
    findDeltas = () => {
        if (this.state.draggable) {
            const deltaX = this.props.currentX - this.state.startX
            const deltaY = this.props.currentY - this.state.startY
            this.setState({ x: deltaX, y: deltaY })
        }
    };
    noMove = () => {
        this.setState({ draggable: false })
    }
    render() {
        const divStyle = {
            marginTop: `${this.state.y}px`,
            marginLeft: `${this.state.x}px`,
        }
        return (
            <div className="shapeHeader" style={divStyle} onMouseDown={this.moveShape}
                ref={this.selector} onMouseMove={this.findDeltas} onMouseUp={this.noMove}>
                <div className={`${this.props.class} shapeDiv`}>
                </div>
            </div>
        )
    }
}