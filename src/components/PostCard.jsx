import { useContext } from "react"
import ProductContext from "../contexts/productContext"

export default function PostCard() {
    const { products } = useContext(ProductContext)

    return (

        <>
            {
                products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title}
                                style={{ aspectRatio: 1, objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5>{product.title}</h5>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>

    )
}