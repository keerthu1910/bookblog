import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import style from '../style/Classics.module.css'
const Classics=()=>{
    const [book,setbook] = useState([])

    useEffect(()=>{
        axios.get('https://blogaboutbooks.herokuapp.com/classics')
            .then(res=>setbook(res.data))
    },[])

    return(
        <div>
            <h2>Good read classics!!</h2>
            {
                book.map(book=>(
                    <div className={style.bookcontainer}>
                        <img className={style.bookimage} src={book.image} alt='imagename' ></img>
                        
                    </div>
                ))
            }
        </div>
    )

}

export default Classics