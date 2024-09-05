import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'props-types'

export default function Navbar() {

  // const[defaultTheam, changedTheam] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })
  // const[Dark, Light] = useState("Dark")
   

  // const clicked = () =>{
  //   if(defaultTheam.color == "black"){
  //     changedTheam({
  //       color: "white",
  //       backgroundColor: "Black"
  //     })
  //     Light("Light")
     
  //   }else{
  //     changedTheam({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     Dark("Dark")
  //   }
  // }

  return (
    <>
    <nav  className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to ="/Homecontainer">Study With-NeoEase</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to ="/Homecontainer">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to ="/About">About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href ="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Notes
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to ="/Economic_12">Economic_12</Link></li>
              <li><Link  className="dropdown-item" to ="/English_12">English_12</Link></li>
              <li><Link  className="dropdown-item" to ="/Computer_12">Computer_12</Link></li>
              <li><Link  className="dropdown-item" to ="/Model_Question_12">Model Question_12</Link></li>
              <li><Link  className="dropdown-item" to ="/Account_12_solution">Account_12_Solution</Link></li>
              <li><hr className="dropdown-divider" /> </li>
              <li><Link className="dropdown-item" to ="/Class_11_Complete_Notes">Class_11_Complete Notes</Link></li>
              <li><Link className="dropdown-item" to ="/Important_Question_12">Important Question_12</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to ="/">Share_Tought</Link>
          </li>
        </ul>
        
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <button  className="btn btn-outline-success" >dark</button>
        </form>
      
      </div>
    </div>
  </nav>
    </>

  )
}
