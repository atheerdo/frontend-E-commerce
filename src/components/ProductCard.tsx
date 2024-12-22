import Image from "../components/Image";
import Button from "../components/ui/Button";
import { IProduct } from "../interfaces";
import {txtSlicer} from "../utils/Functions";
import CircleColor from "./CircleColor";



interface IProps{
  product:IProduct;
}

const ProductCard =({product}:IProps) => {
    const {title, description, imageURL,price,colors,category} = product;

    const renderColorsList = colors.map(color => (<CircleColor key={color} color={color} />));
    
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border p-2 rounded-md text-black flex flex-col border-indigo-400">

            <Image
              imageURL = {imageURL}

              alt={category.name}

              className="rounded-md"
            />


           <h3 className="text-indigo-600 font-medium my-2">{title} </h3>

            <p>{txtSlicer(description)}</p>
            
            <div className="flex items-center flex-wrap my-3 space-x-2">{renderColorsList}</div>


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