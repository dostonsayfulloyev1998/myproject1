import'./Product.css'

const Product = (props) => {

    return (
        <div className='product_item'>
                <div className="inner">
                    <img src={props.rasm} />
                    <h1>{props.text}</h1>
                    <p>{props.price}</p>
                </div>
        </div>
    )
}

export default Product