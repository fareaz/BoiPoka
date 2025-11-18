const follow =()=>{
    const get = localStorage.getItem("wishlist")
    if(get){
     const parse = JSON.parse(get)
     return parse
    }
    else{
        return[]
    }
}
export const addToWishList =(id)=>{
    const store = follow()
    if (store.includes(id)) {
        console.log("hello")
        alert(" ei id already exist ")
    }
    else{
        store.push(id)
        const data = JSON.stringify(store);
        localStorage.setItem("wishlist",data)
    }
}
