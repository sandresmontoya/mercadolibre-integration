const baseUrl = 'https://api.mercadolibre.com'


export async function getConsulta (){
    const responde = await fetch(`${baseUrl}/sites/MCO/search?q=`)
    const responseJson = await responde.json()
    return responseJson  
}


export async function getConsultaBySearch(q){
    const responde = await fetch(`${baseUrl}/sites/MCO/search?q=${q}`)
    const responseJson = await responde.json()
    return responseJson  
}

export async function getConsultaBySearchImg(key){
    const responde = await fetch(`${baseUrl}/sites/${key}`)
    const responseJson = await responde.json()
    return responseJson  
}


export default {
    getConsulta,
    getConsultaBySearch,
    getConsultaBySearchImg
}