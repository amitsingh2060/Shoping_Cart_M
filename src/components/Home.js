import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from './actions/cartActions'
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleClick = (id) => {
        this.props.addToCart(id); 
    }
    
    render() {
        console.log(this.props.items);

        let itemList = this.props.items.map(item => {
            return(
                <div className="card col-6" key={item.id}>
                        <div className="card-image">
                            <img src={item.img}/>
                               <span className="card-title">{item.title}</span>

                             <button onClick={()=>{this.handleClick(item.id)}}>add</button>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}</b></p>
                        </div>
                 </div>
            )
        })
        return (
           <React.Fragment>
              <div><Link to="/cart"> cart</Link></div>
                 <div className="container">
                    <h3 className="center">Our items</h3>
                        <div className="box">
                              {itemList}
                        </div>
                 </div>
           </React.Fragment>
        );
    }
}

    const mapStateToProps = (state)=>{
        return {
        items: state.items
        }
    }

    const mapDispatchToProps= (dispatch)=>{
        return{

            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(Home)

