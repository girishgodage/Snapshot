import React from 'react';

const Image = ({ url, id ,  title }) => {

    console.log(title);
    console.log(url);

    return (
        <li>
           <img src={url} id={id} alt={title} /> 
        </li>
    )
}

export default Image
