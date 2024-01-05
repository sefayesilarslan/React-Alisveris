import './App.css';
import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {
  categoriInfo = { title: "CategoryList", baskabisey: "Başka bir ad" };
  ProductInfo = { title: "ProductList" };

  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoriName });
    this.getProducts(category.id);
  }


  componentDidMount() {
    this.getProducts();

  }
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?id=" + id;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));

  }
  addtocart = (product) => {
    let newcart = this.state.cart;
    var additem = newcart.find(c => c.product.id === product.id);
    if (additem) {
      additem.quantity += 1;
    }
    else {
      newcart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newcart });
    alertify.success(product.productName + "added to cart!");
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "added to cart!");
  }


  render() {

    let categoriInfo = { title: "CategoryList", baskabisey: "Başka bir ad" };
    let ProductInfo = { title: "ProductList" };
    return (
      <div>
        <Container>

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoriInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route excat path='/' Component={
                  props=>(
                    <ProductList
                    {...props}
                    addtocart={this.addtocart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory} info={ProductInfo} />
                  )
                } />
                <Route excat path='/cart'Component={
                  props=>(
                    <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                    />
                  )
                }/>
                <Route path='form1' Component={FormDemo1}/>
                <Route path='form2' Component={FormDemo2}/>
                <Route Component={NotFound}/>
              </Routes>
            
            </Col>


          </Row>
        </Container>

      </div>
    );

  }
}