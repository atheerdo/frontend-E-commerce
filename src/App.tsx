import ProductCard from "./components/ProductCard";
import { productList } from "./data";
import Modal from "./components/ui/Modal";
import {useState}from "react";
import Button from "./components/ui/Button";


function App() {
/* State */
  const [isOpen, setIsOpen] = useState(false)
  
/* Handler */
    function openModal() {
      setIsOpen(true)
    }
    
      function closeModal() {
      setIsOpen(false)
    }
 
/* Renders */
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>);


  return (
    <main className="container mx-auto">
       <div className="flex items-center justify-between">
           <h1 className="ml-5 font-bold text-4xl text-indigo-600 ">Latest Products</h1>
           <Button className="bg-blue-600 hover:bg-blue-800 m-4" width="w-fit" onClick={openModal}>Build now</Button>
       </div>

        <div className="border rounded-md  m-5 grid grid-cols-1 
                  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-3 ">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
          <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-800 duration-500" >Submit</Button>
              <Button className="bg-gray-400 hover:bg-gray-600 duration-500" >Cancel</Button>
          </div>
        </Modal>
    </main>
  )
}

export default App
