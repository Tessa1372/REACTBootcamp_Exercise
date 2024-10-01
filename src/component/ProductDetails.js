const ProductDetails=(props) => {
    console.log(props);

return(
    <>

<div>
    <p>ProductName:-{props.productName} </p>
    <p>Price:-{props.productPrice}</p>
</div>
<div>
    <p>ProductName:-{props.productName} </p>
</div>
</>
);
};
export default ProductDetails; 