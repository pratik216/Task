import React, { Component } from 'react'
import "./details.css"

import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share'
export default class Details extends Component {


    render() {
        
        const url = `name is ${this.props.history.location.first_name} ${this.props.history.location.last_name} email is ${this.props.history.location.email}
            Phone is ${this.props.history.location.phone} Address is ${this.props.history.location.address}`
        const title = "Description"
        const urlLinkedin=this.props.history.location.profile
        const urlFacebook="https://github.com/pratik216"


        return (
            <>
                
                <div className="jumbotron container my-4">
                    <h1 className="top">Detail Information</h1>
                    <div className="main">
                        <div className="pic">

                    <img src={this.props.history.location.profile} alt="p" className="Profile" />
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
                


                    <LinkedinShareButton url={urlLinkedin} title={url} summary="This page is related to the detail of an employee" source={url}>

                        <i className="fab fa-linkedin icons" style={{color:"#0077b5"}}></i>
                    </LinkedinShareButton>

                    <FacebookShareButton url={urlLinkedin} quote={url}>

                        <i className="fab fa-facebook icons" style={{color:"#4267B2"}}></i>
                    </FacebookShareButton>

                    <TwitterShareButton url={urlLinkedin} title={url} imageURL={urlLinkedin}>

                        <i className="fab fa-twitter icons" style={{color:"#1DA1F2"}}></i>
                    </TwitterShareButton>
                        </div>
                    </div>
                </div>





            </>
        )
    }
}
