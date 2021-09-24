import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 35999,
          title: 'Smart Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 85999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.samsung.com/in/smartphones/galaxy-z-flip3-5g/images/galaxy-z-flip3-5g_highlights_colors_green.png',
          id: 2
        },
        {
          price: 65999,
          title: 'Televison',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 169999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }



  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10}}>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
