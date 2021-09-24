import React from 'react'

class CartItem extends React.Component{
    render(){
        console.log('this.props', this.props);
        const{price,title,qty} = this.props.products;
        const{products, onIncreaseQuantity , onDecreaseQuantity, onDeleteProduct} = this.props
        return(
            <div className='cart-item'>
                {this.props.jsx}
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img
                            alt='increase' 
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/512/1828/1828817.png"
                            onClick={()=> onIncreaseQuantity(products)}
                        />
                        <img 
                            alt='decrease'
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/334/334047.png"
                            onClick={()=> onDecreaseQuantity(products)}
                        />
                        <img 
                            alt='delete' 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3221/3221897.png"
                            onClick={()=> onDeleteProduct(products.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;