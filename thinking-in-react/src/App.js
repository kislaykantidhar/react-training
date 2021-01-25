import React from 'react';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductCategoryRow extends React.Component{
  
  render(){
    const category = this.props.category;
    return(
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    )
  }
}
class ProductRow extends React.Component{
  render(){
    const product = this.props.product;
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}
class ProductTable extends React.Component{
  render(){

    let searchText = this.props.searchText;
    let inStock = this.props.inStock;


    let lastProductCategory = null;
    let products = [];
    this.props.products.forEach((product)=>{
      if(product.name.indexOf(searchText)===-1) return
      if(inStock && !product.stocked) return 
      if(product.category!==lastProductCategory)
      {
        products.push(<ProductCategoryRow category={product.category} />);
      }
      products.push(<ProductRow product={product}/>);
      
      lastProductCategory=product.category;
    })
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
    )
  }
}
class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStock}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
class FilterableProductTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      inStock: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }
  
  handleInStockChange(inStock) {
    this.setState({
      inStock: inStock
    })
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          inStock={this.state.inStock}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          searchText={this.state.searchText}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    )
  }
}
export default App;
