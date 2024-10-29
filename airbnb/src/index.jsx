import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'
import Data from './data'

export default function Index(){
    const cards=Data.map(item=>{return(<Card key={item.id} item={item}/*item={item} can also be written as {...item}and then removing .item from each calling from card.js*//>)})
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