import React from "react";
import './Header.css';

export default  ({black})=>{

    return (

        <header  className={black?'black':''} >
<div className="logo">

<a>

    <img src="/netflix.png" />
</a>
</div>
<div className="header-user">

<a>

<img src="/Netflix-avatar.png" />
</a>
</div>
        </header>
    );
}