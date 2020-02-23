import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { dateAt } from '../utils/useTime'

function Leg (props) {

    const [from, setFrom] = useState(props.leg.from.name)
    const [startTime, setStartTime] = useState(dateAt(props.leg.startTime).time)
    var to = ""
    var mode = ""
  //useEffect( () => {
    //setFrom(props.leg.from.name)
    //setStartTime(dateAt(props.leg.startTime).time)
    ////to = props.leg.to.name
    //mode = props.leg.mode
    //}, [props]
    //)

    return(
        <Segment className="leg">
            <span className="from"> {from} <br/></span>
            <span className="startTime"> {startTime} <br/></span>
            <span className="to"> {to} <br/></span>
            <span className="mode"> {mode} <br/></span>
        </Segment>
    )
}

export default Leg