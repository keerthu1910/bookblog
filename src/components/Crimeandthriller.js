import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import style from '../style/Classics.module.css'
const Crimeandthriller=()=>{
    const [cbook,setcbook] = useState([])

    useEffect(()=>{
        axios.get('https://blogaboutbooks.herokuapp.com/crimeandthriller')
            .then(res=>setcbook(res.data))
    },[])

    return(
        <div>
            <h2>Good read crime and thriller!!</h2>
            {
                cbook.map(book=>(
                    <div className={style.bookcontainer}>
                        <img className={style.bookimage} src={book.image} alt='imagename' ></img>
                        
                    </div>
                ))
            }
        </div>
    )

}

export default Crimeandthriller