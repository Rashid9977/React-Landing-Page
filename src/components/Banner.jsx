import React from 'react'

const Banner = (props) => {
    return (
        <div className='container'>
            <div className="banner">
                <div className='content'>
                    <h3>{props.head1} <span>{props.head2}</span></h3>
                    <p>{props.content}</p>

                </div>
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Banner
