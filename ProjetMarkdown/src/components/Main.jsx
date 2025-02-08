import 'bootstrap/dist/css/bootstrap.min.css'
import "../main.css"
import Blagues from "./Blague"
import Citation from "./Citation"
import Footer from "./Footer"
import Dashboard from "./Dashboard"
import Heur from "./Heure"
import Recette from "./Recette"



function Main() {
    return (
            <div className='main-container'>
                <header className='"hero-section text-center'>
                    <h1>Bienvenue sur notre site web</h1>
                </header>

                <div className='container mt-5'> 
                    <div className='row'>
                        <div className='col-md-5'>
                            <Heur/>
                        </div>
                        <div className='col-md-6'>
                            <Citation/>
                        </div>
                        <div className='col-md-6'>
                            <Blagues/>
                        </div>
                        <div className='col-md-6'>
                            <Recette/>
                        </div>
                    </div>
                </div>
                <Dashboard/>
                <Footer/>
            </div>
        
    )
}

export default Main 