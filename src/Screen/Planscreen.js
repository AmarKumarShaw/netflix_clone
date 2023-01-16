// import React, { useEffect, useState } from 'react';
import React from "react";
// import {db} from '../firebase';
import "./Planscreen.css";

function Planscreen() {
//     const [products, setProducts] = useState([]);

//     useEffect (()=> {
//      db.collection("products")
     
// .where("active", "", true)
// .get()
// .then((querySnapshot)=> {
//     const products ={};
//     querySnapshot.forEach(async (productDoc)=>{
//         products[products.id] = productDoc.data();
//         const priceSnap = await productDoc.ref.collection
//         ("prices").get();
//         priceSnap.docs.forEach((price)=> {
//             products[productDoc.id].prices = 
//             {priceId: price.id,
//                 priceData:price.data(),
//             };
//         });
//     });
//     setProducts(products);
// });
//     },[]);

//     console.log(products)
  return (
    <div className='Planscreen'>

    </div>
  )
}

export default Planscreen