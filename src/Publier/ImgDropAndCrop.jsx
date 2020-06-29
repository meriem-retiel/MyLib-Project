import React ,{useState} from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import AnnonceSmall from './AnnonceSmall'
import {ReactComponent as background} from '../svg/background.svg'
import Grid from '@material-ui/core/Grid'
import Input from "./Input"




const result ="https://cdn-3d.niceshops.com/upload/image/product/large/default/vallejo-game-color-dead-white-17-ml-279423-fr.jpg"
const Cropper = () => {
    const [titre, setTitre]= useState('Titre')
    const [price, setPrice]= useState('Prix en')
    const [author, setAuthor]= useState("Auteur")
    const [src,selectFile] = useState(null)
    const handleFileChange =e=>{
        selectFile(URL.createObjectURL(e.target.files[0]))
    }
    const [image,setImage]= useState(null)
    const [crop,setCrop]= useState({aspect:4/6})
    const [result, setResult]=useState(null)
   
    function getCroppedImg() {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
       
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );
        const base64Image = canvas.toDataURL('image/jpeg')
       setResult(base64Image)
    }
    
    
    return (
        <Grid spacing={8} container direction="row" justify="center" >
             <Grid  item sm={4} style={{paddingLeft:"40px",paddingRight:"40px"}} >
                    
                    <AnnonceSmall  title={titre} author={author} price={price} image={result}/>
                 
                  
                    
                </Grid>
            <Grid direction="column" item sm={6} >
               <Grid style={{height:"450px"}} item>
               <div style={{maxHeight:"100px"}} >

                
<div style={{background: "#FAFAFA",border: "1px solid #E0E0E0",borderRadius: "4px",height:'420.078px'}}> 
<input   type='file' accept='image/*' onChange={ handleFileChange}></input>
<div >
    {src && 
    <div style={{display:'flex'}}  > 
    <ReactCrop  style={{display:"flex",height:"400px"}}src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop} />
    <button className ='btn btn-danger' onClick={getCroppedImg}> Crop Image</button>
    </div>}
</div>

   
</div>
</div>
               </Grid>
               
                <Grid item>
                    <Input fct ={(e)=> setTitre(e.target.value)} title= {'Titre du livre'} />
                    <Input fct ={(e)=> setAuthor(e.target.value)} title= {'Auteur'} />
                    <Input fct ={(e)=> setPrice(e.target.value)} type={'number'} title= {"Prix"} />
                </Grid>
            </Grid>
            
                   
      
        </Grid>
    )
}

export default Cropper