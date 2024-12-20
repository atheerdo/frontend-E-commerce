
 // validat imageURL
 function isValidUrl(url: string): boolean {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-._~:/?#@!$&'()*+,;=]*)?$/;
    return urlPattern.test(url);
}


//** product Obj == errorsObj (title, description, imageURL, price)
export const productValidation = (product:{title:string; description:string; imageURL:string; price:string;}) => {
    //** Returns an object
    const error: {title:string; description:string; imageURL:string; price:string;} = {
        title:"",
        description:"",
        imageURL:"",
        price:"",
    }

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 70)
    {
        error.title = "product title filed must be between 10 and 70 character!";
    }

    if(!product.description.trim() || product.description.length < 30 || product.description.length > 200)
    {
            error.description = "product title filed must be between 30 and 200 character!";
    }

    if(!product.imageURL.trim() || !isValidUrl(product.imageURL))
    {
        error.imageURL = "Valid, image URL is required!";
    }

    if(!product.price.trim() || isNaN(Number(product.price)))
    {
        error.price = "Valid, price is required!";
    }
       

    return error;
}