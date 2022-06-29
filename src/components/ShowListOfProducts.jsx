import React, {useState} from 'react'

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

let uniqueProductCount = new Map();
let uniqueProducts = [];
let prodName = [];
let prodCount = [];

for(let i=0; i<listOfProducts.length; i++){
    if(uniqueProductCount.has(listOfProducts[i].productName)){
       uniqueProductCount.set(listOfProducts[i].productName,uniqueProductCount.get(listOfProducts[i].productName)+1)
    }
    else{
        uniqueProductCount.set(listOfProducts[i].productName,1)
        uniqueProducts.push(listOfProducts[i])
    }
}

for(let [k,v] of uniqueProductCount){
    prodName.push(k);
    prodCount.push(v);
}

export const ShowListOfProducts = () => {
    let [items, setItems] = useState(listOfProducts);
    let [count, setCount] = useState(true);

    const getUniqueProductCount = () =>{
        setCount(false)
    }

    const getUniqueProducts = () =>{
        setItems(uniqueProducts);
        setCount(true)
    }

    const ListOfAllProducts =()=>{
        setItems(listOfProducts);
        setCount(true);
    }

    return (
        <div>
            <div style={{marginTop:"100px"}}>
                <button onClick={getUniqueProductCount}>GetUniqueProductCount</button>
                <button onClick={getUniqueProducts}>GetUniqueProducts</button>
                <button onClick={ListOfAllProducts}> Show All Products</button>
            </div>
    
            {
                count===true?
    
                <div style={{marginLeft:"40%",marginTop:"50px"}}>
                    <table>
                        <thead>
                            <tr style={{ color: "green", marginRight: "50px" , border: "1px solid grey"}}>
                                <th >
                                    Product name
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th >
                                    Description
                                </th>
                            </tr>
    
                        </thead>
                        <tbody>
                            {
                                items.map((item,index)=>{
    
                                    return (
                                        <tr key={index}>
                                            <td>{item.productName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                :
                <div style={{marginLeft:"40%",marginTop:"100px"}}>
                    <table>
                        <thead>
                            <tr style={{ color: "blue" }}>
                                <th>
                                    Product name
                                </th>
                                <th>
                                    Count
                                </th>
                            </tr>
    
                        </thead>
                        <tbody>
    
                            {
                                prodName.map((item,index)=>{
    
                                    return (
                                        <tr key={index} >
                                            <td>{item}</td>
                                            <td>{prodCount[index]}</td>
                                        </tr>
                                    )
                                })
                            }
    
                        </tbody>
                    </table>
    
                </div>
            }
        </div>
    )}
    


