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
import {v4 as uuid} from "uuid";
import Select from "./components/ui/Select";
import {categories} from "./data";
import {TProductNames} from "./Type/types";



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
  const [productToEdit,setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [productToEditIndex,setProductToEditIndex] = useState<number>(0);
  const [errors,setError] = useState({title:"",description:"",imageURL:"",price:"",tempColor:""});
  const [tempColor,setTempColor] = useState<string[]>([]);  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

 

 

  
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const openEditModal = () =>  setIsOpenEditModal(true);
  const closeEditModal = () =>  setIsOpenEditModal(false);

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

const onChangeEditHandler = (event:ChangeEvent<HTMLInputElement>) =>
  {
    const {value,name} = event.target;
  
    setProductToEdit({...productToEdit,[name]:value});
  
    setError({...errors,[name]:""});
  
  }

const onCancel = () => {
  setProduct(defaultProductObj);
  closeModal();
}

const onSubmitHandler = (event:FormEvent<HTMLFormElement>):void => {
  event.preventDefault();

  const errors = productValidation
  ({
    title:product.title,
    description:product.description,
    imageURL:product.imageURL,
    price:product.price,
    tempColor:tempColor,
    
  });

  const hasErrorMessage = Object.values(errors).some(value => value === '') &&
   Object.values(errors).every(value => value ==='') && errors.tempColor === "";


    if(!hasErrorMessage)
      {
      setError(errors);
      return;
    }



      setProducts(prev => [{...product,id:uuid() ,colors:tempColor,category:selectedCategory},...prev]);
    
      setProduct(defaultProductObj);
      setTempColor([]);
      closeModal();
  }

const onSubmitEditHandler = (event:FormEvent<HTMLFormElement>):void => {
  event.preventDefault();

   const errors = productValidation
  ({
    title:productToEdit.title,
    description:productToEdit.description,
    imageURL:productToEdit.imageURL,
    price:productToEdit.price,
    tempColor:tempColor,
    
  });

  const hasErrorMessage = Object.values(errors).some(value => value === "") &&
  Object.values(errors).every(value => value ==='') && errors.tempColor === "";


    if(!hasErrorMessage)
      {
        setError(errors);
        return;
      }



      const updatedProducts = [...products];
      updatedProducts[productToEditIndex] = {...productToEdit,colors:tempColor.concat(productToEdit.colors)};
      setProducts(updatedProducts);
    
      setProductToEdit(defaultProductObj);
      setTempColor([]);
      closeEditModal();
  }

  

/* Renders */
  const renderProductList = products.map((product,index) =>
     <ProductCard key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      index={index}
      productToEditIndex={setProductToEditIndex}
      />);

  const renderColorsList = colors.map((color) => 
    (<CircleColor 
      key={color}
      color={color}
      onClick={() =>
     {

      if(tempColor.includes(color))
      {
        setTempColor(prev => prev.filter(item => item !== color));
        return;
      }

      if(productToEdit.colors.includes(color))
        {
          setTempColor(prev => prev.filter(item => item !== color));
          return;
        }
        else{
          setTempColor(prev => [...prev,color]);
          setError({...errors,tempColor:""});
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

  const renderProductEditWithErrorMessage = (id:string,label:string,name:TProductNames) => 
  {
    return(
      <div className="flex flex-col mb-2" >
        <label htmlFor={id} className="mb-1 font-medium">{label}</label>
        <Input type={"text"} id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler}/>

        <ErrorMessage message={errors[name]}/>
      </div>
    )
  }



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


       {/**Add Modal**/}
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">

         <form className="space-y-3" onSubmit={onSubmitHandler}>
                {renderFormInputList}

                <Select selected={selectedCategory} setSelected={setSelectedCategory }/>

                <div className="flex items-center flex-wrap my-3 space-x-2">{renderColorsList}</div>

               {errors.tempColor ? <ErrorMessage message={errors.tempColor}/> : null} 

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




       {/**Edit Modal**/}
        <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit Product">

         <form className="space-y-3" onSubmit={onSubmitEditHandler}>

                {renderProductEditWithErrorMessage("title","Product Title","title")}
                {renderProductEditWithErrorMessage("description","Product Description","description")}
                {renderProductEditWithErrorMessage("imageURL","Product ImageURL","imageURL")}
                {renderProductEditWithErrorMessage("price","Product Price","price")}

                <Select selected={productToEdit.category} setSelected={(value) => setProductToEdit({...productToEdit,category:value}) }/>
               
                <div className="flex items-center flex-wrap my-3 space-x-2">{renderColorsList}</div>
              
                <div className="flex items-center text-sm flex-wrap my-3 space-x-2">
                    {tempColor.concat(productToEdit.colors).map(color => 
                    (<span key={color} className="mb-2 text-white rounded-md  p-1"
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
