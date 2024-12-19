import ProductCard from "./components/ProductCard";
import { productList,formInputList } from "./data";
import Modal from "./components/ui/Modal";
import {useState,ChangeEvent,FormEvent}from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import { Description } from "@headlessui/react";


function App() {

  const defaultProductObj =
    {
      id:"",
      title:"",
      description:"",
      imageURL:"",
      price:"",
      colors:[],
      category:{
          name:"",
          imageURL:"",
      },
  };

/* State */

  const [product,setProduct] = useState<IProduct>(defaultProductObj);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () =>  setIsOpen(true);
  const closeModal = () =>  setIsOpen(false);
  

  
  
  
/* Handler */
    
const onChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) =>
{
  const {value,name} = event.target;

  setProduct({...product,[name]:value});

}

const onCancel = () => {
  setProduct(defaultProductObj);
  closeModal();
}

const onSubmitForm = (event:FormEvent<HTMLFormElement>):void => {
  event.preventDefault();

  const error = productValidation({
    title:product.title,
    description:product.description,
    imageURL:product.imageURL,
    price:product.price});

  console.log(error);
}



/* Renders */
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>);

  const renderFormInputList = formInputList.map(input => (
      <div className="flex flex-col mb-2" key={input.id}>
          <label htmlFor={input.id} className="mb-1 font-medium">{input.label}</label>
          <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeEventHandler}/>
      </div>
  ))

  return (
    <main className="container mx-auto  rounded-lg">
       <div className="flex items-center justify-between m-6">
           <h1 className=" font-bold text-4xl text-indigo-600 ">Latest Products</h1>
           <Button className="bg-blue-600 hover:bg-blue-800 " width="w-fit" onClick={openModal}>Build now</Button>
       </div>

        <div className="border rounded-md  m-5 grid grid-cols-1 
                  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-3 ">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">

         <form className="space-y-3" onSubmit={onSubmitForm}>
                {renderFormInputList}

                <div className="flex items-center space-x-3 ">
                  <Button className="bg-blue-600 hover:bg-blue-800 duration-500" >Submit</Button>
                  <Button className="bg-gray-400 hover:bg-gray-600 duration-500" onClick={onCancel}>Cancel</Button>
              </div>
         </form>
         
        </Modal>
    </main>
  )
}

export default App
