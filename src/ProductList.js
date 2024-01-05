import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
export default class ProductList extends Component {



  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.props.currentCategory}</h3>

        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
               Product Name
              </th>
              <th>
              QuantityPerUnit
              </th>
              <th>
              UnitPrice
              </th>
              <th>
              UnitsInStock
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr color="success" key={product.id}>
                <th scope="row">
                  {product.id}
                </th>
                <td>
                {product.productName}
                </td>
                <td>
                {product.quantityPerUnit}
                </td>
                <td>
                {product.unitPrice}
                </td>
                <td>
                {product.unitsInStock}
                </td>
                <td>
                  <Button onClick={()=>this.props.addtocart(product)} color='info'>Sepete Ekle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
