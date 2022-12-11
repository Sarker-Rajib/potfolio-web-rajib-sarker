import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-nine-cyan-14.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data);
            })
    }, []);


    return (
        <div className='py-5'>
            <div className="container">
                <h2 className="text-center pb-4">My Projects</h2>
                <div className='row gy-4'>
                    {
                        projects.map((project, i) => <ProjectCard key={i} project={project} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;