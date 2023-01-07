import React from 'react'
import ImageButton from '../common/ImageButton'
import FaceBookSVG from '../Assets/Facebook.svg'
import InstagramSVG from '../Assets/Instagram.svg'
import LinkedInSVG from '../Assets/LinkedIn.svg'
import TwitterSvg from '../Assets/Twitter.svg'
import YoutubeSVG from '../Assets/Youtube.svg'
const FormFooterRightSection = () => {
    return (
        <div className=' h-full flex items-center  justify-center gap-2'>
            <ImageButton linkHref={'https://www.facebook.com/OlousApp'} imgSrc={FaceBookSVG}></ImageButton>
            <ImageButton linkHref={'https://www.instagram.com/olous_app/?hl=en'} imgSrc={InstagramSVG}></ImageButton>
            <ImageButton linkHref={'https://www.youtube.com/@OlousApp'} imgSrc={YoutubeSVG}></ImageButton>
            <ImageButton linkHref={'https://www.linkedin.com/company/olous-app/'} imgSrc={LinkedInSVG}></ImageButton>
            <ImageButton linkHref={'https://twitter.com/app_olous'} imgSrc={TwitterSvg}></ImageButton>
            
        </div>
    )
}

export default FormFooterRightSection