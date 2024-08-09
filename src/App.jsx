import Header from './layout/header/Header';
import Footer from './layout/footer/Footer'
import Community from "./pages/community/Community";
import "./styles/global.css"

function App() {


    return (
        <>
            <div className="main_container">
                <Header />
            </div>
            <Community />
            <Footer />
        </>
    )
}

export default App
