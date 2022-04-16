import React from 'react'
import style from '../style/Navbar.module.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar=()=>{

    const navigate=useNavigate()

    function gohome(){
        navigate('/')
    }

    return(
        <div className={style.navbar}>
            <div className={style.title}>
                <h1 onClick={gohome}>World of books</h1>
            </div>
            <div className={style.links}>
                <Link className={style.link} to='/classics'>classics</Link>
                <Link className={style.link} to='/crimeandthriller'>Crime&Thriller</Link>
                <Link className={style.link} to='/nonfiction'>Non-fiction</Link>
            </div>
        </div>
    )
}


export default Navbar