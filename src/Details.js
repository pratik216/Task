import React, { Component } from 'react'
import "./details.css"
import demoPic from './images/demoPic.jpg'
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share'
export default class Details extends Component {


    render() {
        
        const url = `name is ${this.props.history.location.first_name} ${this.props.history.location.last_name} email is ${this.props.history.location.email}
            Phone is ${this.props.history.location.phone} Address is ${this.props.history.location.address}`
        const title = "Description"
        const urlLinkedin="https://github.com/pratik216"
        const urlFacebook="https://github.com/pratik216"


        return (
            <>
                
                <div className="jumbotron container my-4">
                    <h1 className="top">Detail Information</h1>
                    <div className="main">
                        <div className="pic">

                    <img src={demoPic} alt="p" className="Profile" />
                        </div>
                  
                        <div className="details">

                    <h4>First Name</h4>
                    <p className="lead">{this.props.history.location.first_name}</p>
                
                  

                    <h4>Last Name</h4>
                    <p className="lead">{this.props.history.location.last_name}</p>
                    

                    <h4>Email</h4>
                    <p className="lead">{this.props.history.location.email}</p>
                    
                 

                    <h4>Phone</h4>
                    <p className="lead">{this.props.history.location.phone}</p>
                   

                    <h4>Address</h4>
                    <p className="lead">{this.props.history.location.address}</p>
                


                    <LinkedinShareButton url={urlLinkedin} title={title} summary="qwertyuiop">

                        <i className="fab fa-linkedin icons" style={{color:"#0077b5"}}></i>
                    </LinkedinShareButton>

                    <FacebookShareButton url={urlFacebook} title={title} summary="qwertyuiop">

                        <i className="fab fa-facebook icons" style={{color:"#4267B2"}}></i>
                    </FacebookShareButton>

                    <TwitterShareButton url={url} title={title} summary="qwertyuiop">

                        <i className="fab fa-twitter icons" style={{color:"#1DA1F2"}}></i>
                    </TwitterShareButton>
                        </div>
                    </div>
                </div>





            </>
        )
    }
}
