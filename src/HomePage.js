import React, { Component } from 'react'
import axios from 'axios'
import demoPic from './images/demoPic.jpg'
import { Link } from 'react-router-dom';
import {BeatLoader} from 'react-spinners'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false;
        this.state = {
            query: '',
            ActualData: []
        }
    }
    GetData = async () => {
        const data = await axios.get("https://dev.perfectprof.com/api/search")
        
        this.setState({ ActualData: data.data.data })
        
    }
    componentDidMount() {
        this.GetData()
    }
    componentWillUnmount() {
        this._isMounted = false;
     }
    render() {
        
        return (
            <div className="container">
                <h1>Professional Employee Details</h1>
                <div className="row">
                    {!this.state.ActualData.length ? 
                    

                        <BeatLoader loading size={50}  />
                    
                    :(
                        
                            this.state.ActualData.map((Item, key) => (
                                <div className="col-md-4" key={key}>

                                    <div className="card" style={{ width: "18rem", marginBottom: "10px", marginTop: "10px" }}>
                                        <img src={demoPic} className="img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h3 className="card-title"><i className="fas fa-male"></i> {Item.professional.first_name}</h3>
                                            <p className="card-text"> <i className="fas fa-phone"></i> {Item.professional.phone}</p>
                                            <Link to={{ pathname: "/details/" + Item.id, first_name: Item.professional.first_name, profile: Item.professional.profile_pic,last_name:Item.professional.last_name
                                                        ,email:Item.professional.email,phone:Item.professional.phone,address:Item.professional.address    
                                        
                                        
                                        }} 
                                            name={Item.professional.first_name}
                                             className="btn btn-primary">Click to see Details!!</Link>
                                        </div>
                                    </div>

                                </div>
                            ))
                            )
                        
                    }


                </div>
            </div>
        )
    }
}
