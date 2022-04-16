import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import style from '../style/Classics.module.css'
const Nonfiction=()=>{
    const [nbook,setnbook] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/nonfiction')
            .then(res=>setnbook(res.data))
    },[])

    return(
        <div>
            <h2>Good read non-fiction!!</h2>
            {
                nbook.map(book=>(
                    <div className={style.bookcontainer}>
                        <img className={style.bookimage} src={book.image} alt='imagename' ></img>
                        
                    </div>
                ))
            }
        </div>
    )

}

export default Nonfiction