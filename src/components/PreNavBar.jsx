import React from 'react'
import "../styles/PreNavBar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48px" width="48px"><path d="M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V15q0-1.2.9-2.1.9-.9 2.1-.9h5.5v-.5q0-3.15 2.175-5.325Q20.85 4 24 4q3.15 0 5.325 2.175Q31.5 8.35 31.5 11.5v.5H37q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h26V15h-5.5v4.5q0 .65-.425 1.075Q30.65 21 30 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15h-9v4.5q0 .65-.425 1.075Q18.65 21 18 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15H11v26Zm8.5-29h9v-.5q0-1.9-1.3-3.2Q25.9 7 24 7q-1.9 0-3.2 1.3-1.3 1.3-1.3 3.2ZM11 41V15v26Z"/></svg>

const PreNavBar = () => {
  return (
    <div className='PreNav'>
        <div> 
             <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
        </div>
        <div>
             <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login"> {cartIcon}  CART (0)</a>
               
        </div>
     </div> 
  )
}

export default PreNavBar