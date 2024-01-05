import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    this.getCategories();
  
  }

  getCategories=()=>{
    fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=>this.setState({categories:data}));
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h5>{this.props.info.baskabisey}</h5>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={category.categoriName===this.props.currentCategory?true:false} color="success" onClick={()=>this.props.changeCategory(category)} key={category.id}>
              {category.categoriName}
            </ListGroupItem>
          ))}


        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}

      </div>
    )
  }
}
