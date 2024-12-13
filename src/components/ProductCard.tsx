import Image from "../components/Image";
import Button from "../components/ui/Button";
import { IProduct } from "../interfaces";
import {txtSlicer} from "../utils/Functions";


interface IProps{
  product:IProduct;
}

const ProductCard =({product}:IProps) => {
    const {title, description, imageURL,price,category} = product;
    
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md text-black flex flex-col">

            <Image
              imageURL = {imageURL}

              alt={category.name}

              className="rounded-md"
            />


           <h3 className="text-indigo-600 font-medium my-2">{title} </h3>

            <p>{txtSlicer(description)}</p>

                 <div className="flex items-center my-3 space-x-2">
                    <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
                    <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
                    <span className="w-5 h-5 bg-indigo-300 rounded-full cursor-pointer"/>
                 </div>

                    <div className="flex items-center justify-between">
                        <span className="text-indigo-600 font-medium">{price}</span>
                        <Image
                            imageURL = {category.imageURL}

                            alt={category.name}

                            className="w-12 h-12 rounded-full object-center"
                        />
                    </div>

                    <div className="flex items-center justify-between my-2 space-x-2 mt-4">

                        <Button className="bg-blue-600">Edit</Button>
                        
                        <Button className="bg-red-700">Delete</Button>
                
                    </div>
                

        </div>

       
    )
}
 
export default ProductCard;