import React from "react"
export default class MovableShape extends React.Component {
    constructor(props) {
        super(props);
        this.shapePos = React.createRef();
        this.state = {
            offsetX: 0,
            offsetY: 0,
            prevX: 0,
            prevY: 0,
            prevShapeBound: {},
            initialCount: 0,
        }
        this.onShapeClick = this.onShapeClick.bind(this);
        this.ForShapeMove = this.ForShapeMove.bind(this);
        this.stopShapeMove = this.stopShapeMove.bind(this);

    }

    onShapeClick = (e) => {
        this.setState({
            prevX: e.clientX,
            prevY: e.clientY,
        });
        window.addEventListener("mousemove", this.ForShapeMove);
        window.addEventListener("mouseup", this.stopShapeMove);

        /*Conditional used to set the intial position of shape for reference. 
        setState in componentDidMount gave a different position and created an offset of -9px
        Assumed that this offset may not be conistant across screen size*/
        if (this.state.initialCount < 1) {
            this.setState(prevstate => ({
                prevShapeBound: this.shapePos.current.getBoundingClientRect(),
                initialCount: prevstate.initialCount + 1
            }))
        }

    }
    //Moves Shape around while mouse is down
    ForShapeMove(e) {
        const currentShapeBound = this.shapePos.current.getBoundingClientRect();
        const deltaX = e.clientX - this.state.prevX;
        const deltaY = e.clientY - this.state.prevY;
        const shapeBoundLeftDelta = currentShapeBound.left - this.state.prevShapeBound.left;
        const shapeBoundTopDelta = currentShapeBound.top - this.state.prevShapeBound.top
        const currentOffsetX = shapeBoundLeftDelta + deltaX;
        const currentOffsetY = shapeBoundTopDelta + deltaY;

        this.setState({
            offsetX: currentOffsetX,
            offsetY: currentOffsetY,
            prevX: e.clientX,
            prevY: e.clientY,
        })
        if (shapeBoundLeftDelta + deltaX < 0) {
            this.setState({
                offsetX: 0,
            })
        }
        if (shapeBoundLeftDelta + deltaX > this.props.containerbound.width - currentShapeBound.width) {
            this.setState({
                offsetX: this.props.containerbound.width - currentShapeBound.width,
            })
        }
        if (shapeBoundTopDelta + deltaY < 0) {
            this.setState({
                offsetY: 0,
            })
        }
        if (shapeBoundTopDelta + deltaY > this.props.containerbound.height - currentShapeBound.height) {
            this.setState({
                offsetY: this.props.containerbound.height - currentShapeBound.height,
            })
        }
    }
    //Remove Event Listeners on MouseUp
    stopShapeMove = () => {
        window.removeEventListener("mousemove", this.ForShapeMove);
        window.removeEventListener("mouseup", this.stopShapeMove)
    }

    render() {

        const divStyle = {
            marginLeft: `${this.state.offsetX}px`,
            marginTop: `${this.state.offsetY}px`
        }
        return (

            <div className={`${this.props.class} shapeDiv`}
                style={divStyle}
                onMouseDown={this.onShapeClick}
                draggable="true" ref={this.shapePos}>
            </div>

        )
    }
}