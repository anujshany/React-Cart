import React from 'react'
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {price:999,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {price:9999,
                    title:'Mobile Phone',
                    qty:1,
                    img:'',
                    id:2
                },
                {price:39999,
                    title:'Television',
                    qty:1,
                    img:'',
                    id:3
                },
                {price:149999,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:4
                }
            ]
        }
        // this.testing()
    }  
    render(){
        const {products} = this.state
        return(
            <div className="cart">
            {products.map((products) => {
                return(
                <CartItem 
                    products={products}
                    key={products.id}
                    
                />
                )
            })}
            </div>
        );
    }  
}



export default Cart;