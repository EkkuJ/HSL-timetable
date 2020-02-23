import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { UTCmilAt } from '../utils/useTime'

// The PlanForm is the segment of the page that holds the form of the site. 
// Has the ability to change the time-state of the whole site.
function PlanForm (props) {

  const [formDate, setFormDate] = useState("")

  function handleFormSubmit () {
    
    props.handleSubmit(UTCmilAt(formDate))
  }

  return (
    <Form className="PlanForm" onSubmit={() => handleFormSubmit()}>
      <Form.Field>
        <label>Leave At:</label>
        <input type="text" name="leve-time" onChange={e => setFormDate(e.target.value)} placeholder="e.g. 07:30" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default PlanForm
