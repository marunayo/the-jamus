import '../assets/css/sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return(
        <div className="relative">
            <div className="fixed z-10 ">
            <div className="container shadow-black flex sticky top-0 left-0">
                <div className="title">
                     <h1> <a href={'/'}>The Jamu’s </a></h1>
                </div>
                <div className="content">
                    <div className="content-1">
                        <a href={'/jamu'}><p>Jamu</p></a>
                    </div>
                    <div className="content-1">
                        <a href={'/about'}><p>About</p></a>
                    </div>
                    <div className="content-1">
                        <p>Recipes</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
