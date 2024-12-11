import Image from "../components/Image";
import Button from "../components/ui/Button";


interface IProps{

}

const ProductCard =({}:IProps) => {
    return (
        <div className="border p-2 rounded-md text-black flex flex-col">

            <Image
              imageURL = "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg"

              alt="product name"

              className="rounded-md"
            />


           <h3 className="text-indigo-600 font-medium my-2">BMW 2024 </h3>

            <p>Dimensions:4912 x 3264,
              Aspect Ratio:307:204,
               Camera:NEX-5N,
                Focal:120.0mm,
                 Aperture:ƒ/5.6,
                 ISO:320,
                 Taken At:Feb 22.2018,
                 Software:Photos 3.0</p>

                 <div className="flex items-center my-3 space-x-2">
                    <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
                    <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
                    <span className="w-5 h-5 bg-indigo-300 rounded-full cursor-pointer"/>
                 </div>

                    <div className="flex items-center justify-between">
                        <span className="text-indigo-600 font-medium">$50,000</span>
                        <Image
                            imageURL = "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg"

                            alt="product name"

                            className="w-12 h-12 rounded-full object-center"
                        />
                    </div>

                    <div className="flex items-center justify-between my-2 space-x-2 mt-4">
                        <Button className="bg-blue-600" width="w-full">Edit</Button>
                        
                        <Button className="bg-red-700">Delete</Button>
                    </div>
                

        </div>

       
    )
}
 
export default ProductCard;