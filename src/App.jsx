import { useEffect, useState } from "react"
import PostPage from "./components/PostPage"
import ProductContext from "./contexts/productContext"



function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setProducts(data)
      })
  }, [])

  return (
    <>
      <ProductContext.Provider value={{ products: products }}>
        <PostPage />
      </ProductContext.Provider>

    </>
  )
}

export default App
