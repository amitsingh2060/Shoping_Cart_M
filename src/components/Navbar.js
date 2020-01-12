import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
       <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                             <a class="navbar-brand" href="#">Navbar</a>
  

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            {/* <Link class="nav-link" to="/shop">shop  <span class="sr-only">(current)</span></Link> */}
                        </li>
                        <li class="nav-item active">
                            {/* <Link class="nav-link" href="/cart">My cart <span class="sr-only">(current)</span></Link> */}
                        </li>            
                        </ul>
                        
                    </div>
            </nav>
       </React.Fragment>
    )
}

export default Navbar
