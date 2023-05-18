import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';






function Location(props) {
    return (

        <div>
            <Form style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: 'bold', fontSize: '50px' }} >Google Maps Misfits</Form.Label>
                        <Form.Control type="text" value={props.myCity} onChange={props.handleCity} id="cityInput" placeholder="City Name" />
                    </Form.Group>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Button style={{ background: ' #35495e', cursor: 'pointer', padding: '0px 40px 5px 40px', margin: '3px 30 30 30px' }} onClick={(e) => {
                            e.preventDefault()
                            props.setLocation(props.input)
                            props.fetchData()
                            //setLocation function sets the location state variable to the current value of the input state variable
                        }}>Explore</Button>
                    </div>
                </fieldset>
            </Form>
            <div>Location: {props.displayCity.display_name}</div>
            <div>Latitude: {props.displayCity.lat}</div>
            <div>Longitude: {props.displayCity.lon}</div>
        </div>
    )
}

export default Location;