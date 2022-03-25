import React from 'react';
import { Card } from 'react-bootstrap';
import './User.css'

const User = ({user}) => {
    return (
        <div className='w-50 mx-auto p-5'>
            <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={user.picture.medium} />
                <Card.Body>
                    <Card.Title>{user.name.title} {user.name.first} {user.name.last} </Card.Title>
                   <p>Email : {user.email}</p>
                   <p>Phone : {user.phone}</p>
                   <p>City : {user.location.city}</p>
            </Card.Body>
            </Card>
        </div>
    );
};

export default User;