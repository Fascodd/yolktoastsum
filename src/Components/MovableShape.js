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
            prevShapeBound:{},
            initialCount:0,
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
        window.addEventListener("mousemove",this.ForShapeMove);
        window.addEventListener("mouseup",this.stopShapeMove)
        /*Conditional used to set the intial position of shape for reference. 
        setState in componentDidMount gave a different position and created an offset of -9px
        Assumed that this offset may not be conistant across screen size*/
        if(this.state.initialCount <1){
            this.setState(prevstate=>({
                prevShapeBound:this.shapePos.current.getBoundingClientRect(),
                initialCount:prevstate.initialCount+1}))
        }
     console.log(this.state.initialCount)
    }
    ForShapeMove(e){
       
        let currentShapeBound = this.shapePos.current.getBoundingClientRect();
        let deltaX = e.clientX - this.state.prevX;
        let deltaY = e.clientY - this.state.prevY;
        let shapeBoundLeftDelta = currentShapeBound.left -this.state.prevShapeBound.left;
        let shapeBoundTopDelta = currentShapeBound.top - this.state.prevShapeBound.top
        this.setState({
            offsetX: shapeBoundLeftDelta  +deltaX,
            offsetY:shapeBoundTopDelta +deltaY,
            prevX: e.clientX,
            prevY:e.clientY,
        })
    }
    stopShapeMove = () => {
        window.removeEventListener("mousemove",this.ForShapeMove);
        window.removeEventListener("mouseup",this.stopShapeMove)
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