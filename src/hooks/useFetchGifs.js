import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGifts";

export const useFetchGifs =(category)=>{
    // 1. Seteamos el estado
    const [state,setState] =useState({
        data:[],
        loading:true
    })

    // 2. Seteamos el estado
    useEffect(()=>{

        //3.llamamos aqui a la  funcion que  nos devuelve una  promesa
        getGifts(category)
            .then(imgs=>{

                //4. Aqui actualizamos el estado  con la  respuesta del request

                    console.log(imgs)
                    setState({
                        data:imgs,
                        loading:false
                    })



            } );
    },[category])

    // setTimeout(()=>{
    //     setState({
    //         data:[1,2,3,4,5],
    //         loading:false
    //     })
    // },3000)

    return state
}
