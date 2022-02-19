import React from "react";
import Twitter from "../../../../../public/images/twitter_icon.png"
import Instagram from "../../../../../public/images/insta_icon.png"
import LinkedIn from "../../../../../public/images/linkedin_icon.png"
import YouTube from "../../../../../public/images/youtube_icon.png"
import { SocialContainer, SocialIcon } from "./SocialsStyles"

const Socials = () => {

    const social_media = [{
        image: Twitter,
        link: "https://twitter.com/GDSC_Sheridan"
    },
    {
        image: Instagram,
        link: "https://www.instagram.com/gdsc_sheridan_college/"
    },
    {
        image: YouTube,
        link: "https://www.youtube.com/channel/UCDOufRCbSgVOnSBm_ySaRgg"
    },
    {
        image: LinkedIn,
        link: "https://www.linkedin.com/company/google-dsc-sheridan-college"
    }
        // maybe discord too??
    ]

    return (
        <SocialContainer>
            {
                social_media.map((item, id) =>
                    <a target="_blank" key={id} href={item.link} rel="noreferrer noopener">
                        <SocialIcon src={item.image}></SocialIcon>
                    </a>
                )
            }
        </SocialContainer>
    )
}


export default Socials