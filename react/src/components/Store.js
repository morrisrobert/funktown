import Card from "./Card"
const Store =({ products, heading })=> {

    console.log(products)

    // let productARR = []

    const cardComponents = products.map(product => {

        return <Card 
            key={product.album_id}
            id={product.album_id}
            name={product.name}
            alias={product.alias}
            price={product.price}
            imgUrl={product.imgUrl}
        />
    })
    

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <h2>{heading ? heading : 'Store'}</h2>
                <div className="row row=cols-1 row-cols-md-5 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Store