import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Body = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data=> setUsers(data.results))
    },[])
    return (
        <div>
            {
                users.map(user=> <User key={user.email} user={user}></User>)
            }
        </div>
    );
};

export default Body;