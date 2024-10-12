import SideBar from '../SideBar/SideBar'
import control from '../../images/Control.png'
import up from '../../images/Upload icon.png'
import './AddItem.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddItem = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState<null | File>(null);

    

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signup");
        }
    }, []);

    function send (event:any){
        event.preventDefault()
        axios.post("https://test1.focal-x.com/api/items" , {
            name: name,
            price: price,
            image: image

        },{ headers : {
            Authorization : localStorage.getItem("token"),
             "Content-Type": "multipart/form-data"
          }}) .then(res => {
            console.log(res.data)
            navigate("/dashboard")
        }).catch(error => console.log(error))
    }

    return (
        <div className="add">
            <SideBar />
            <div className="section2-add">
                <img className="control-img" src={control} alt="control"/>
                <h1>ADD NEW ITEM</h1>
                
                <form  onSubmit={(event)=> send (event)} className="add-input">
                <div className='test'>
                    <div className="name-price-input">
                        <div className="name-price-input1">
                            <label>Name</label>
                            <input type="text" placeholder="Enter the product name" onChange={(event) => setName(event.target.value)} />
                        </div>

                        <div>
                            <label>Price</label>
                            <input type="text" placeholder="Enter the product price" onChange={(event) => setPrice(event.target.value)} />
                        </div>
                    </div>

                    <div className="uplo-photo">
                        <label htmlFor="fileInput">Image</label>
                        <div className="label-none">
                            <label htmlFor="firstImg"><img src={up} alt="upload"/></label>
                            <input 
                                type="file" 
                                id="firstImg" 
                                onChange={(event) => {
                                    const file = event.target.files?.[0];
                                    setImage(file ?? null);
                                }}
                            />
                        </div>
                    </div>
                    
                 </div>

                    <div className='btn-add'>
                    <input type="submit" value="send" />
                    </div>
                </form>

               
            </div>
        </div>
    );
}

export default AddItem;
