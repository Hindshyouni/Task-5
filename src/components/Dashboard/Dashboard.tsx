import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "../SideBar/SideBar"
import CardPagination from "../CardPagination/CardPagination"
import './Dashboard.css'


const Dashboard = () => {
    const navigate =useNavigate()
    

    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/signup")
        }
      },[])
  return (
    <div className="dashboard">

        <SideBar />
        <CardPagination />
    </div>
  )
}

export default Dashboard