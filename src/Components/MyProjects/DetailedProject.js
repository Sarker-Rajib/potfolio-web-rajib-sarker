import React from 'react';
import { useLoaderData } from 'react-router';

const DetailedProject = () => {
    const project = useLoaderData();
    const { id, displayImages, name, liveLink, clientRepo, serverRepo, details } = project[0];

    // console.log(project);

    return (
        <div className="container">
            <div className="item-card h-100 p-3 p-lg-5" style={{ boxShadow: "0px 5px 15px 2px #764cd866", marginTop: "100px", borderRadius: "15px" }}>
                <h5>{id}. {name}</h5>
                <div className="row">
                    <div className="text py-2">
                        <h6 className='pt-3'>About the Project</h6>
                        <a className='btn border' href={liveLink}>Live Link</a>
                        <a className='btn border' href={clientRepo}>github client site</a>
                        <a className='btn border' href={serverRepo}>github server site</a>

                        <h6 className='details pt-3'>Details: </h6>
                        <ul>
                            {
                                details.map((detail, i) => <li key={i}>{detail}</li>)
                            }
                        </ul>
                    </div>
                </div>

                <div className="row g-4">
                    {
                        displayImages?.map((image, i) => <div className='col-md-6 col-xl-4'>
                            <div className='h-100 p-2' style={{ boxShadow: "0px 5px 15px 2px rgba(75,210,190,0.4)", borderRadius: "15px" , overflow: "hidden"}}>
                                <img key={i} className='img-fluid' src={image} alt="disImages" />
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailedProject;