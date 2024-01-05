import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Sepet  - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu end>
                    {
                    this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}
                    <Badge color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                    <Badge color='warning'>{cartItem.quantity}</Badge></DropdownItem>
                    ))}
                        
                    <DropdownItem>
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
