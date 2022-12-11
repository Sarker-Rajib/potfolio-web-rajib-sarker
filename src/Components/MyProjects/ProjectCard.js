import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, name, bannerImage, liveLink, clientRepo, serverRepo, shortDetails } = project;
    // console.log(id, name, bannerImage, liveLink, clientRepo, serverRepo, shortDetails);

    return (
        <>
            <div className="item-card h-100 p-3 p-lg-5" style={{ boxShadow: "0px 5px 15px 2px #764cd866", borderRadius: "15px" }}>
                <h5>{id}. {name}</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text py-2">
                            <h6 className='pt-3'>About the Project</h6>
                            <p>{shortDetails}</p>

                            <a className='btn border' href={liveLink}>Live Link</a>
                            <a className='btn border' href={clientRepo}>github client site</a>
                            <a className='btn border' href={serverRepo}>github server site</a>
                        </div>

                        <Link className='btn border border-success' to={`/projects/${id}`} >More Details</Link>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannerImage} alt="banner" />
                    </div>
                </div>
                {/* <img className='img-fluid' src={} alt="ban" /> */}
            </div>
        </>
    );
};

export default ProjectCard;