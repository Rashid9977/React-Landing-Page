import React from 'react'
import Banner from './components/Banner'
import blogimg from './blog.png'

const Blog = () => {
    return (
        <div><Banner
            head1="This"
            head2="Blog"
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident velit officia vero vel dicta quod nostrum nesciunt neque voluptatibus."}
            image={blogimg}

        /></div>


    )
}

export default Blog