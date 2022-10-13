/*
 * Created on Thu Oct 13 2022
 * Updated on Thu Oct 13 2022
 *
 * [ Allan Nava ] 
 * Copyright (©)  2022 HiWay Media SRL
 */
export default function Logger(...data){
    const isProd = process.env.NODE_ENV === 'production'
    // if (!isProd){
    console.log(...data)
    // }
}