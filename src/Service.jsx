import React from 'react'
import Banner from './components/Banner'
import serviceimg from './service.png'

const Service = () => {
    return (
        <div>
            <Banner
                head1="Our"
                head2="Service"
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quod molestiae obcaecati illum reprehenderit alias, repellat eos animi debitis dolore!"}
                image={serviceimg} />

        </div>

    )
}

export default Service