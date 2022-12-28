import "../App.css"
export default function Navbar(){

    return (
    <div className="navbar">
        <nav className="navigation">
        <img src="https://app.dexalot.com/logos/dexalot_minimal_beta_light.png"></img>
        </nav>
        <div className="navbar-content">
            <a href="https://app.dexalot.com/trade"><span style={{borderRadius:5,padding:5,width:50}}>APP</span></a>
            <a href="https://medium.com/dexalot">ARTICLES</a>
        </div>

    </div>
    )
}