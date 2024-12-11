import ProductCard from "./components/ProductCard";


function App() {
 

  return (
    <div>
      <div className="border rounded-md  m-5 grid grid-cols-1 
                 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default App
