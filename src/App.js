import React from "react";
import logo from './logo.svg';
import './App.css';
import ProductDetails from './component/ProductDetails'
import Counter from './component/Counter'
function App() {
  const data=[
  {name:"Laptop",price:100000},
  {name:"TV",price:100000},
  {name:"Lapz",price:100000}];
  //const productName ='Laptop';
      //const productPrice= 1000;
      //const product={
        //name:"Refrigerator",
        //rating: "4/5",
        //price: 40000

  return (
    <React.Fragment>
    {/* {data.map((data)=>{
        return (<ProductDetails 
          productName={product.name}
            productPrice={product.price}/>);
    
      } )} */}
 
      {/*<ProductDetails 
      productName={data[0].name}
        productPrice={data[0].price}
        />
        <ProductDetails 
      productName={data[1].name}
        productPrice={data[1].price}
        />
        <ProductDetails 
      productName={data[2].name}
        productPrice={data[2].price}
    />*/}
    <Counter/>

</React.Fragment>
  );
}

export default App;
 
  