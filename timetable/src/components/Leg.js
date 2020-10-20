import { from } from 'apollo-boost'
import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import { dateAt } from '../utils/useTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons'

function Leg (props) {
  var from = props.leg.from.name
  var fromClean = (from === 'Origin') ? 'Home' : from
  var startTime = dateAt(props.leg.startTime).time.slice(0, -3)
  var to = props.leg.to.name
  var toClean = (to === 'Destination') ? 'University' : to
  var endTime = dateAt(props.leg.endTime).time.slice(0, -3)
  var mode = props.leg.mode
  var icon = (mode === 'WALK') ? <FontAwesomeIcon icon={faWalking} />
    : (mode === 'BUS') ? <Icon name="bus" color="blue" />
      : (mode === 'SUBWAY') ? <Icon name="subway" color="orange" />
        : mode
  return (
    <Segment.Group className="leg" horizontal raised>
      <Segment className="from" textAlign="center"> {fromClean}<br />{startTime} </Segment>
      <Segment className="mode" textAlign="center"> {icon} </Segment>
      <Segment className="to" textAlign="center"> {toClean} <br />{endTime}</Segment>
    </Segment.Group>
  )
}

export default Leg
