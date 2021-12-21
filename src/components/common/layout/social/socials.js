import React from "react";
import Twitter from "../../../../../public/images/twitter_icon.png"
import Instagram from "../../../../../public/images/insta_icon.png"
import LinkedIn from "../../../../../public/images/linkedin_icon.png"
import YouTube from "../../../../../public/images/youtube_icon.png"
import "./socials.css"

const Socials = () => {

    const social_media = [{
        image: Twitter,
        link: "https://www.linkedin.com"
    },
    {
        image: Instagram,
        link: "https://www.linkedin.com"
    },
    {
        image: YouTube,
        link: "https://www.linkedin.com"
    },
    {
        image: LinkedIn,
        link: "https://www.linkedin.com"
    }
    ]

    return (
        <div className="div-socials">
            {
                social_media.map((item, id ) => 
                    <a key={id} href={item.link} className="sa-socials">
                     <img src={item.image} className="img-socials"></img>
                    </a>
                )
            }
            
        </div>
    )
}


export default Socials