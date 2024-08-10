import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/af95a3dcb0d659b809c909cf/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setData(res["conversion_rates"]))
        console.log(data);


    },[currency])
    return data
}
export default useCurrencyInfo;