
export default function Hud(){

    function handleClick(e){
        e.preventDefault();
        console.log(e.target.textContent);
    }



    return(
        <div className="Hud">
            <div className="Hud__Overlay">
            </div>
            <div className="Hud__Selection__Box">
                    
            <div className="Hud__Selection__Box__items" onClick={handleClick}>
                <p>Joseph</p>
            </div>
            <div className="Hud__Selection__Box__space"></div>
            <div className="Hud__Selection__Box__items" onClick={handleClick}>
                <p>Dio</p>
            </div>
            </div>
        </div>
    )
}