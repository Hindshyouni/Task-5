import './CardPagination.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import search from '../../images/search.png'
import { useEffect, useState } from 'react';

interface Item {
    id: number;
    image_url: string;
    name: string;
    price: number;
}

const CardPagination = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<Item[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickCard, setClickCard] = useState<number | null>(null);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signup");
        }

        axios.get("https://test1.focal-x.com/api/items", {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        }).then(res => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);

    return (
        <div>
            <form className='form-search'>
                <input type='text' placeholder='Search product by name '></input>
                <button><img src={search} alt="search"/></button>
            </form>
            <div className='add-btn'>
                <button><NavLink to="/Add">ADD NEW PRODUCT</NavLink></button>
            </div>
            <div className="card-container">
                {items?.map((element, index) => (
                    <div 
                        className='photo' 
                        key={element.id}
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                        onClick={() => setClickCard(element.id)}
                        
                    >
                        <img 
                            src={element.image_url} 
                            alt={`Item ${index}`} />
                        {hoveredIndex === index && (
                            <span className="item-name">{element.name}</span>
                        )}
                        {clickCard === element.id && (
                            <div className='two-btn'>
                                <button onClick={() => navigate("/Edit")}>Edit</button>
                                <button onClick={() => navigate("/Delete")}>Delete</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
    );
};

export default CardPagination;
