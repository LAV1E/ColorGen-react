import { useEffect, useState } from "react"


const Randomcolor = ()=>{

    const[typeOfColor,setTypeOfColor] = useState('hex');
    
    const[Color,setColor] = useState('#000000');
    
    function randomcolorUtility(length){
        return Math.floor(Math.random()*length)

    }

    function handleCreateRandomHexColor(){
            const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            let hexColor = "#";
            for(let  i = 0; i<6; i++){
                hexColor += hex[randomcolorUtility(hex.length)];
            }
            setColor(hexColor);
    }
    function handleCreateRandomRgbColor(){
       const r = randomcolorUtility(256)
       const g = randomcolorUtility(256);
       const b = randomcolorUtility(256);
       
       setColor(`rgb (${r}, ${g} , ${b})`);
    }
     
    useEffect(()=>{
        if(typeOfColor == 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor]);
    return(
        <div className="container"
        style={{
            width: '100vw',
            height: '100vh',
            background:Color,
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}> Generate Random Color</button>
            <div style={{
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                color:'white',
                fontSize:'60px',
                marginTop:'50px',
                flexDirection:"column",
                gap:'20px',

            }}>
                <h3>{typeOfColor === 'rgb' ? "RGB color": "HEX Color"}</h3>
                <h1>{Color}</h1>
             </div>
        </div>
    )
}

export default Randomcolor;