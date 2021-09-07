import React, {useEffect, useState} from 'react'
import {GifGridItem} from "./GifGridItem";


import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {


    //  1. llamamos al hook creado por nonostros
    const {data:Images,loading}=useFetchGifs(category);

    // Se  ejecutara solo una  vez
    // useEffect(() => {
    //     getGifts(category).then(imgs=> setImages(imgs));
    // }, [category])
    //



    return (
      <>
          <h3>{category}</h3>
          {/* 2. si aun no carga */}
          {loading && <p className="animate__animated animate__flash">Cargando...</p>}
          <div className="card-grid  animate__animated animate__fadeIn">


              {
                  // 3. Aqui mostramos el contenido de cada imagen
                  Images.map(img => (
                      <GifGridItem
                          key={img.id}
                          {...img}
                      />
                  ))
              }



          </div>
      </>
    )
}
