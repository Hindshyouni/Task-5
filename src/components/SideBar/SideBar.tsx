
import './SideBar.css'
import logo1 from '../../images/logo.png'
import profile from '../../images/pexels-photo-2379004 1.png'
import icon1 from '../../images/Vector.png'
import icon2 from '../../images/bookmark 1.png'
import logout from '../../images/sign-out-alt 1.png'
const SideBar = () => {
  return (
    <div className="sidebar">
        
            
            <img className='logo1' src={logo1} alt='logo'/>
           
        <div className='section2'>
            <div className='photo-div'>
                <div>
                <img src={profile} alt='profile'/>
                </div>
                <h3>Mohammad Alkordy</h3>
            </div>


            <div className='btn-div'>
              <div> <img src={icon1} />  <button> Products</button></div>
              <div><img src={icon2} /><button>  Favorites</button></div>
              <div><img src={icon2} /><button>order list</button></div>

            </div>
            
        </div>

        <div className='logout'>
            <button>Logout</button><img src={logout} />
        </div>


    </div>
  )
}

export default SideBar