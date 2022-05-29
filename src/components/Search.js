import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSistrix, FaMapMarkerAlt } from "react-icons/fa";

function Search() {

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="searchCity">
        <Form.Control type="search" placeholder="Search city here" />
        </Form.Group>
        <Button variant="primary">
          <FaSistrix />
        </Button>
        <Button variant="secondary">
          <FaMapMarkerAlt />
        </Button>
      </Form>
    </div>
  )
}

export default Search