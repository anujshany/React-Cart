import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar';
import firebase from "firebase/app";
import firestore from "firebase";

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore()
  }

  componentDidMount(){
    
    this.db
     .collection('Products')
     //.where('price','<=',6999)
     .orderBy('price','desc')
     .onSnapshot((snapshot)=>{
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      })

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products,
        loading:false
      })
    })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('Products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log('document updated')
      })
      .catch((error)=>{
        console.log('error', error)
      })

  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    const docRef = this.db.collection('Products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log('document updated')
      })
      .catch((error)=>{
        console.log('error', error)
      })

  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    
    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('Products').doc(id);
    
    docRef
      .delete()
      .then(()=>{
        console.log('Deleted Succesfully')
      })
      .catch((error)=>{
        console.log('error', error)
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

    products.map((products)=>{
      if(products.qty >0){
        cartTotal = cartTotal + products.qty * products.price
      }
      return'';
    });
    return cartTotal;
  }

  addProduct = () =>{
    this.db
      .collection('Products')
      .add({
        img:'',
        price:18000,
        qty:3,
        title: 'washing machine'
      })
      .then((docRef) =>{
        console.log('Product has been added',docRef)
      })
      .catch((error)=>{
        console.log('error:', error)
      })
  }

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding:5, fontsize:20, borderRadius:12,marginLeft:5}}> Add a product </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ....</h1>  }
        <div style={{fontSize:20,padding:10}}>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
