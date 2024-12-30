import Image from "../components/Image";
import Button from "../components/ui/Button";
import { IProduct } from "../interfaces";
import {txtSlicer, numberWithCommas} from "../utils/Functions";
import CircleColor from "./CircleColor";



interface IProps{
  product:IProduct;
  setProductToEdit:(product:IProduct) => void;
  openEditModal:() => void;
  index:number;
  productToEditIndex:(index:number) => void;
  openRemoveModal : ()=> void
}

const ProductCard =({product,setProductToEdit, openEditModal, index, productToEditIndex, openRemoveModal}:IProps) => {
    const {title, description, imageURL,price,colors,category} = product;

    const renderColorsList = colors.map(color => (<CircleColor key={color} color={color} />));

    const onEdit = () => {
        setProductToEdit(product);
        openEditModal();
        productToEditIndex(index);
    }

    const onRemove = ()=> {
        setProductToEdit(product);
        openRemoveModal();
        productToEditIndex(index)
    }
    
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md text-black flex flex-col border-indigo-400">

            <Image
              imageURL = {imageURL}

              alt={category.name}

              className="rounded-md"
            />


           <h3 className="text-indigo-600 font-medium my-2">{title} </h3>

            <p>{txtSlicer(description)}</p>
            
            <div className="flex items-center mt-2 flex-wrap space-x-1">
                    {!colors.length? <p className="min-h-[20px] font-medium text-red-600 text-sm">No Colors Available</p> :  renderColorsList}
            </div> 

                    <div className="flex items-center justify-between">
                        <span className="text-indigo-600 font-medium">${numberWithCommas(price)}</span>
                        
                        <div className="flex items-center space-x-2">
                            <span>{category.name}</span>

                            <Image imageURL = {category.imageURL} alt={category.name} 
                            className="w-12 h-12 rounded-full object-center"
                            />
                           
                        </div>


                    </div>

                    <div className="flex items-center justify-between my-2 space-x-2 mt-4">

                        <Button className="bg-blue-600" onClick={onEdit}>Edit</Button>
                        
                        <Button className="bg-red-700" onClick={onRemove}>Remove</Button>
                
                    </div>
                

        </div>

       
    )
}
 
export default ProductCard;