import { Link } from "react-router-dom"
const Card =(props)=> {

    return (
        <div className="col">
            <div className="card" style={{width: "18rem;" }}>
                <img src={`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title product-name text-capitalize">
                        <Link to={`/${props.endpoint}/${props.id}`}>
                        {props.name}
                        </Link>
                    </h3>
                    <p className="card-text" id="cardIm">{props.alias}</p>
                    <p className="card-text" id="price">Price {props.price}</p>


                </div>
                <footer className="card-footer">
                <button className="btn btn-primary cart-btns text-capitalize d-block mx-auto" id="log">Add your items to the ships log</button>
                </footer>
            </div>
        </div>
    )
}

export default Card