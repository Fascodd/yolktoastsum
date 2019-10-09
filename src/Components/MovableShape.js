import React from "react"

export default class MovableShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draggable: false,
            offsetX: 0,
            offsetY: 0,
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
        this.setState({
            draggable: true,
            startX: this.props.currentX,
            startY: this.props.currentY,
            deltaX: 0,
            deltaY: 0
        })
    }

    findDeltas = () => {
        if (this.state.draggable) {

            this.setState({
                deltaX: this.props.currentX - this.state.startX,
                deltaY: this.props.currentY - this.state.startY,
                ongoingX: this.state.offsetX + this.state.deltaX,
                ongoingY: this.state.offsetY + this.state.deltaY
            });

        }
    };
    noMove = () => {
        this.setState((prevstate) => ({
            draggable: false,
            offsetX: prevstate.ongoingX,
            offsetY: prevstate.ongoingY
        }))
    }
    render() {
        const divStyle = {
            marginLeft: `${this.state.ongoingX}px`,
            marginTop: `${this.state.ongoingY}px`
        }
        return (

            <div className={`${this.props.class} shapeDiv`} style={divStyle}
                onMouseDown={this.moveShape} onMouseMove={this.findDeltas}
                onMouseUp={this.noMove} onMouseLeave={this.noMove}
                ref={this.selector} draggable>
            </div>

        )
    }
}