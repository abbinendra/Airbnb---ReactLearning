import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'
import Data from './data'

export default function Index(){
    const cards=Data.map(item=>{
        return(
            <Card key={item.id} img={item.coverImg} rating={item.stats.rating} rno={item.stats.reviewCount} location={item.location} title={item.title} price={item.price}/>
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className='cont'>
            {cards}
            </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Index/>)
