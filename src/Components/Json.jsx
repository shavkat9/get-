// import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'

export default function Apps() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then(json => setUser(json))
    }, []);
    return (
      <div>
        {
        user.map((e) => (
         <div>
          <p>{e.name}</p>
          <h2>{e.phone}</h2>
         </div>
        ))}
      </div>
    )
}
