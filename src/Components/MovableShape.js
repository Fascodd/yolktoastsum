import React from "react"

export default class MovableShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draggable: false,
            x: 0,
            y: 0,
            ongoingX: 0,
            ongoingY: 0,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0
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
            this.setState((prevstate) => ({ deltaX: this.props.currentX - prevstate.startX, deltaY: this.props.currentY - prevstate.startY }))
            this.setState((prevstate) => ({ ongoingX: prevstate.x + prevstate.deltaX, ongoingY: prevstate.y + prevstate.deltaY }))
        }
    };
    noMove = () => {
        this.setState({ draggable: false })
        this.setState((prevstate) => ({ x: prevstate.x + prevstate.deltaX, y: prevstate.y + prevstate.deltaY }))
    }
    render() {
        const divStyle = {
            marginTop: `${this.state.ongoingY}px`,
            marginLeft: `${this.state.ongoingX}px`,
        }
        return (
           
                <div className={`${this.props.class} shapeDiv`} style={divStyle}
                    onMouseDown={this.moveShape} onMouseMove={this.findDeltas} onMouseUp={this.noMove} onMouseOut={this.noMove}
                    ref={this.selector} >
                </div>
           
        )
    }
}