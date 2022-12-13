export default function Modal({modal}){
    return(
        <div className="background">
            <div className="container">
                <div className="modal-close"><button  onClick={()=>{modal(false)}}>X</button></div>
                <div className="modal-title"><h1>Modalı kapatmak istiyor musnunuz</h1></div>
                <div className="modal-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
                <div className="button-modal"><button id="accept" onClick={()=>{modal(false)}}>Evet</button>
                <button id="reject" onClick={()=>{modal(false)}}>Hayır</button>
                </div>
            </div>

           
        </div>
    )
}