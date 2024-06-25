import Card from "./Card"
const Store =({ products, heading })=> {
    let productARR = []
    
    let cardComponents

    for (let i = 0; i < products.length; i++) {
        if (products[i].product_id == 3) {

            productARR.push(products[i])
            cardComponents = product.map(product => {
                let artist = product.band !== null ? product.band 
                    : product.alias !== null ? product.alias
                    : `${product.firstName} ${product.lastName}`
                return <Card
                            key={product.album_id}
                            id={product.album_id}
                            endpoint={'Vinyl'}
                            productName={product.title}
                            price={product.price}
                            detail={artist}
                            imgUrl={product.imgUrl}
                        />
            })
        } else if (products[i].product_id == 1) {
            productARR.push(products[i])
            cardComponents = products.map(product => {
                return <Card
                            key={product.poster_id}
                            id={product.poster_id}
                            endpoint={'poster'}
                            productName={product.poster}
                            detail={`Size: ${product.size}`}
                            price={product.price}
                            imgUrl={product.imgUrl}
                        />
            })
        }
    }

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <h2>{heading ? heading : 'Store'}</h2>
                <div className="row row=cols-1 row-cols-md-4 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Store