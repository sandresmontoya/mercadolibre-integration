import React from 'react'
import Shop from './Shop'
import Search from './Search'
import {getConsulta, getConsultaBySearch, getConsultaBySearchImg} from '../services/items'


class ShopContainer extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            items: [],
            isFetch: true,
        }

    }

    async componentDidMount(){
       const responseJson = await getConsulta()
       this.setState({items:responseJson.results, isFetch: false })
    } 

    componentDidUpdate(){
        console.log('update')

    }

    handleSearch = async (search) =>{
        const responseJson = await getConsultaBySearch (search)
        this.setState({items: responseJson.results})
    }

    handleSearchImg = async (searchImg) =>{
        const responseJson = await getConsultaBySearchImg (searchImg)
        this.setState({items: responseJson.results})
    }


    render (){

        const{isFetch, items} = this.state

  
        return (

            <React.Fragment>
                <Search handleSearch={this.handleSearch}/>
                {
                    isFetch && 'Loading...'
                }
                {
                    (!isFetch && !items.length) && "Ingresa un item a buscar"
                }
            
                <section className="items-container">
                    {
                        items.map((item)=> <Shop 
                        imageurl ={item.thumbnail} 
                        price = {item.price} 
                        name={item.title} 
                        id={item.id}
                        key={item.id}/>
                        )
                     }
                </section>
            </React.Fragment>
        ) 
    }
}

export default ShopContainer

