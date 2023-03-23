import React from 'react'
import Banner from './components/Banner'
import homeimg from './home.png'

const Home = () => {
    return (
        <div>
            <Banner
                head1="Welcome"
                head2="RAComp"
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim laudantium ipsa autem ab modi! Unde deserunt odit iusto voluptates?"}
                image={homeimg}
            />


        </div>
    )
}

export default Home