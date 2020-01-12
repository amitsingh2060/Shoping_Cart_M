import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              console.log(this.props.total);
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img}/>
                                    </div>                         
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="btn btn-sucess ml-5" onClick={()=>{this.handleAddQuantity(item.id)}}>inc</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>dec</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>                                
                                </li>                
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <React.Fragment>
                <Link to="/total">Total</Link>
                <div className="container">
                <div className="cart">
    <h5>You have ordered:{this.props.total}</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>      
            </div>

            </React.Fragment>

       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total:state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
