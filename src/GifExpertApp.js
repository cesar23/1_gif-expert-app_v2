import React, {useState} from 'react'
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


export const GifExpertApp = () => {
    // const categorias =['One punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories,'otro'])
    //     setCategories(cats=>[...cats,'otro'])
    // }
    return (
        <>
            <h2>GifExpert</h2>
            {/*   1. Formulario donde haremos la busqueda con enter */}
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {

                    /*   2. Cuando busquemos las  categoria seteadas en  hook haremos la  busqueda */
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
