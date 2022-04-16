import React from 'react'
import { Parallax } from 'react-parallax'
import bk1 from '../images/book1.jpg'
import bk2 from '../images/book2.jpg'
import bk3 from '../images/book3.jpg'
import style from '../style/Home.module.css'

const Home=()=>{
    return(
        <div>
            
        <Parallax className={style.image} bgImage={bk1} strength={800}>
            <div className={style.text}>
                <p>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</p>
            </div>
            
        </Parallax>
        <Parallax className={style.image} bgImage={bk2} strength={800}>
            <div className={style.text1}>
                <p>The real difference, though, lies in our attitude to reading. Gilbert K. Chesterton once said: “There is a great deal of difference between an eager man who wants to read a book and the tired man who wants a book to read.”</p>
            </div>
        </Parallax> 
        <Parallax className={style.image} bgImage={bk3} strength={800}>
            <div className={style.text2}>
                <p>Whenever you read a good book, somewhere in the world a door opens to allow in more light.</p>
            </div>
        </Parallax>
        </div>
    )
}


export default Home