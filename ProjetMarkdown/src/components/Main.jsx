import Blagues from "./Blague"
import Citation from "./Citation"
import Footer from "./Footer"
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
    return (
            <div>
                <Navigation/>
                <Dashboard/>
                <Citation/>
                <Blagues/>
                <Footer/>
            </div>
        
    )
}

export default Main 