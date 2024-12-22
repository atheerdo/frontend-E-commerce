import ProductCard from "./components/ProductCard";
import { productList,formInputList,colors } from "./data";
import Modal from "./components/ui/Modal";
import {useState,ChangeEvent,FormEvent}from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import {v4 as uuid} from "uuid"



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

  const [products,setProducts] = useState<IProduct[]>(productList);
  const [product,setProduct] = useState<IProduct>(defaultProductObj);
  const [errors,setError] = useState({title:"",description:"",imageURL:"",price:""});
  const [tempColor,setTempColor] = useState<string[]>([]);  

 

 

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () =>  setIsOpen(true);
  const closeModal = () =>  setIsOpen(false);
  

  
/* Handler */
    
const onChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) =>
{
  const {value,name} = event.target;

  setProduct({...product,[name]:value});

  setError({...errors,[name]:""});

}

const onCancel = () => {
  setProduct(defaultProductObj);
  closeModal();
}

const onSubmitForm = (event:FormEvent<HTMLFormElement>):void => {
  event.preventDefault();

  const errors = productValidation
  ({
    title:product.title,
    description:product.description,
    imageURL:product.imageURL,
    price:product.price,
  });

  const hasErrorMessage = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value ==='');


    if(!hasErrorMessage)
      {
      setError(errors);
      return;
    }

      setProducts(prev => [{...product,id:uuid() ,colors:tempColor},...prev]);
    
      setProduct(defaultProductObj);
      setTempColor([]);
      closeModal();
  }





/* Renders */
  const renderProductList = products.map(product => <ProductCard key={product.id} product={product}/>);
  const renderColorsList = colors.map(color => (<CircleColor key={color} color={color} onClick={() =>
     {

      if(tempColor.includes(color))
      {
        setTempColor(prev => prev.filter(item => item !== color));
      }
      else
      {
        setTempColor(prev => [...prev,color]);
      }
    }


    } />
  ));


  const renderFormInputList = formInputList.map(input => (
      <div className="flex flex-col mb-2" key={input.id}>
          <label htmlFor={input.id} className="mb-1 font-medium">{input.label}</label>
          <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeEventHandler}/>

          <ErrorMessage message={errors[input.name]}/>
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

                <div className="flex items-center flex-wrap my-3 space-x-2">{renderColorsList}</div>

                <div className="flex items-center text-sm flex-wrap my-3 space-x-2">
                    {tempColor.map(color => (<span key={color} className="mb-2 text-white rounded-md  p-1"
                     style={{backgroundColor:color}} >{color}</span>))}
                </div>
               
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
