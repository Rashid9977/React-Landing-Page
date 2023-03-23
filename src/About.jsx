import React from 'react'
import Banner from './components/Banner'
import aboutimg from './about.png'

const About = () => {
    return (
        <div>
            <Banner
                head1="About"
                head2="Us"
                content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate officia atque placeat dicta eius, ad magnam officiis molestias necessitatibus beatae."}
                image={aboutimg}
            />
        </div>


    )
}

export default About