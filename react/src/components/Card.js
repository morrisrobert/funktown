import { Link } from "react-router-dom"
const Card =(props)=> {

    return (
        <div className="col">
            <div className="card" style="width: 18rem;" >
                <img src={`/images/${props.imgUrl}`} alt={props.productName} className="img-fluid image card-img-top"/>
                <div className="card-body">
                    <h3 className="cart-title product-name text-capitalize">
                        <Link to={`/${props.endpoint}/${props.id}`}>
                        {props.productName}
                        </Link>
                    </h3>
                    <p className="card-text text-capitalize card-detail">{props.detail}</p>
                    <p className="cart-text">Price ${props.price}</p>
                </div>
                <footer className="card-footer">
                <button className="btn btn-primary cart-btns text-capitalize d-block mx-auto">add to the ship</button>
                </footer>
            </div>
        </div>
    )
}

export default Card