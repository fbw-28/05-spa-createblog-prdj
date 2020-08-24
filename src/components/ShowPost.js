import React from 'react';

export default function ShowPost(props) {
   
    let user = props.location.ForwardedUser;

    return (
        <div>
        <h1>Post:{user &&  user.value} </h1>
         
        </div>
    );
}
