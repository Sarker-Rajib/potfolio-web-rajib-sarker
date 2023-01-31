import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

                <div>
                    <h2>My Simple projects (Live Link)</h2>
                    <Link to='https://sarker-rajib.github.io/Dimaateo/index.html'>Dimaateo</Link>
                    <Link to='https://sarker-rajib.github.io/kidsure/index.html'>kidsure</Link>
                    <Link to='https://sarker-rajib.github.io/stock-sniper-trading/index.html'>stock-sniper-trading</Link>
                    <Link to='https://sarker-rajib.github.io/Parmley-Graham-Ltd-Online-Store/'>Parmley-Graham-Ltd-Online-Store</Link>
                    <Link to='https://sarker-rajib.github.io/compara/index.html'>compara</Link>
                    <Link to='https://sarker-rajib.github.io/ventura/bankdetails.html'>ventura/bankdetails</Link>
                    <Link to='https://sarker-rajib.github.io/APS-Global/index.html'>APS-Global</Link>
                    <Link to='https://sarker-rajib.github.io/black-dragon/index.html'>black-dragon</Link>
                    <Link to='https://sarker-rajib.github.io/TallyDocs/index.html'>TallyDocs</Link>
                    <Link to='https://sarker-rajib.github.io/Trade-Guardian/index.html'>Trade-Guardian</Link>
                    <Link to='https://sarker-rajib.github.io/Recompense/index.html'>Recompense</Link>
                    <Link to='https://sarker-rajib.github.io/solar-profit-v1/index.html'>solar-profit-v1</Link>
                    <Link to='https://sarker-rajib.github.io/IBT/index.html'>IBT/index</Link>
                    <Link to='https://sarker-rajib.github.io/N_Product-M/index.html'>N_Product-M</Link>
                    <Link to='https://sarker-rajib.github.io/Magnetiscur/index.html'>Magnetiscur</Link>
                    <Link to='https://sarker-rajib.github.io/world-cup/index.html'>world-cup</Link>
                    <Link to='https://sarker-rajib.github.io/PIY_MAIN/index.html'>PIY_MAIN</Link>
                    <Link to='https://sarker-rajib.github.io/ProEdu/index.html'>ProEdu/index</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Account-PW.html'>CoursEmbly/Account-PW</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Course-add-1.html'>CoursEmbly/Course-add-1</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Course-add-2.html'>CoursEmbly/Course-add-2</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Course.html'>CoursEmbly/Course</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Search-By.html'>CoursEmbly/Search-By</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Search-by-course-category.html'>CoursEmbly/Search-by-course-category</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Search-by-courses.html'>CoursEmbly/Search-by-courses</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Search-by-institute.html'>CoursEmbly/Search-by-institute</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Search-by-instructor.html'>CoursEmbly/Search-by-instructor</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/Uploader-profile-page.html'>CoursEmbly/Uploader-profile-page</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/course-preview.html'>CoursEmbly/course-preview</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/index.html'>CoursEmbly/index</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/say-about-yourself.html'>CoursEmbly/say-about-yourself</Link>
                    <Link to='https://sarker-rajib.github.io/CoursEmbly/slider-priview.html'>CoursEmbly/slider-priview</Link>
                    <Link to='https://sarker-rajib.github.io/GiLeadHcp/module-Non-promotional.html'>GiLeadHcp/module-Non-promotional</Link>
                    <Link to='https://sarker-rajib.github.io/GiLeadHcp/module.html'>GiLeadHcp/module</Link>
                    <Link to='https://sarker-rajib.github.io/Gilead-Liver/module-Non-promotional.html'>Gilead-Liver/module-Non-promotional</Link>
                    <Link to='https://sarker-rajib.github.io/Myissues/Privacy-Settings.html'>Myissues/Privacy-Settings</Link>
                    <Link to='https://sarker-rajib.github.io/Myissues/Rules-Guidelines.html'>Myissues/Rules-Guidelines</Link>
                    <Link to='https://sarker-rajib.github.io/blessed-fund/index.html'>blessed-fund/index</Link>
                    <Link to='https://sarker-rajib.github.io/Vanture/index.html'>Vanture</Link>
                    <Link to='https://sarker-rajib.github.io/agaamin/index.html'>agaamin</Link>
                    <Link to='https://sarker-rajib.github.io/SuongCity/index.html'>SuongCity</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;