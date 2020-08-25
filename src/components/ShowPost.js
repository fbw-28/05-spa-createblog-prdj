import React from 'react';
import {Link} from "react-router-dom";

export default function ShowPost(props) {
   
    console.log(props);
    
    return (
        <div>
        {props.list && props.list.map((post) => {
            return (
                <>
                <header>
                <h1>{post.title}</h1>
                </header>
                
                <section>
                <p>{post.content}</p>
                </section>
                
                <section>
                <p>{post.userName} wrote at: {post.postTime}</p>
                </section>
                
                </>
            );
          }
        )
        
        
        }
         
        </div>
    );
}
