import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl, Button} from 'react-bootstrap';
import React, {Component} from 'react';

export default class MyNav extends Component  {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">স্বতন্ত্র জোটের কাছে জমা পরা বিভিন্ন ক্যাম্পাসে নির্যাতনের বর্ণনাসমুহ </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScIJDumfCtb78rjMhbd9O7IhPn28waOu2vUK-W68NqrS0IXdg/viewform?fbclid=IwAR1HQqiihmwxCukGn1V5KsRwpPiUHZWMUwODX45qDgpamKV7f60wy_uKKuc">আপনার সাথে ঘটে যাওয়া নির্যাতনের ঘটনা জানাতে পারেন এই লিঙ্কে</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}