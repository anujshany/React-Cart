import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // this.testing()
    }

    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() =>{
    //             resolve('done')
    //         },5000)
    //     })

    //     promise.then(() =>{
    //         //set state acts like async call
    //         this.setState({qty:this.state.qty+10});

    //         console.log('state', this.state);
    //     });
    // }


    IncreaseQuantity = () => {
       
    //set state form 1
    //    this.setState({
    //        qty: this.state.qty + 1
    //    }, ()=>{
    //    console.log('this.state', this.state)
    //});
       

    //set state form 2 - if prev state required 
    this.setState((prevState) => {
        return{
            qty: prevState.qty+1
        }
    }, ()=>{
        console.log('this.state', this.state)
    });
    }
    DecreaseQuantity = () =>{
        const {qty} = this.state;
        if(qty === 0){
            return
        }
        this.setState((prevState) =>{
            return{
                qty:prevState.qty-1
            }
        })
    }

    render(){
        console.log('render');
        const{price,title,qty} = this.state;
        return(
            <div className='cart-item'>
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
                            onClick={this.IncreaseQuantity}
                        />
                        <img 
                            alt='decrease'
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/334/334047.png"
                            onClick={this.DecreaseQuantity}
                        />
                        <img 
                            alt='delete' 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3221/3221897.png"
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