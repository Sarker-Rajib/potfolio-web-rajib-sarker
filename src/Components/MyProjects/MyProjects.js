import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './MyPro.css';

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
        <div className='py-5 overflow-hidden'>
            <div className="container">
                <h2 className="text-center pb-4">My Projects</h2>
                <div className='row gy-4'>
                    {
                        projects.map((project, i) => <ProjectCard key={i} project={project} />)
                    }
                </div>

                <div className='pt-5'>
                    <h2>My Simple projects (Live Links)</h2>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/about-us.html">pronted/about-us</a>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/Offerings-tech&it.html">pronted/Offerings-tech&it</a>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/career.html">pronted/career</a>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/offering-ERP.html">pronted/offering-ERP</a>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/offering-online-class.html">pronted/offering-online-class</a>
                    <a className='live-link' href="https://sarker-rajib.github.io/pronted/offering-online-store.html">pronted/offering-online-store</a>


                    <a className='live-link' href='https://sarker-rajib.github.io/Dimaateo/index.html'>Dimaateo</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/kidsure/index.html'>kidsure</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/stock-sniper-trading/index.html'>stock-sniper-trading</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Parmley-Graham-Ltd-Online-Store/'>Parmley-Graham-Ltd-Online-Store</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/compara/index.html'>compara</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/ventura/bankdetails.html'>ventura/bankdetails</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/APS-Global/index.html'>APS-Global</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/black-dragon/index.html'>black-dragon</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/TallyDocs/index.html'>TallyDocs</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Trade-Guardian/index.html'>Trade-Guardian</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Recompense/index.html'>Recompense</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/solar-profit-v1/index.html'>solar-profit-v1</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/IBT/index.html'>IBT/index</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/N_Product-M/index.html'>N_Product-M</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Magnetiscur/index.html'>Magnetiscur</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/world-cup/index.html'>world-cup</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/PIY_MAIN/index.html'>PIY_MAIN</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/ProEdu/index.html'>ProEdu/index</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Account-PW.html'>CoursEmbly/Account-PW</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Course-add-1.html'>CoursEmbly/Course-add-1</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Course-add-2.html'>CoursEmbly/Course-add-2</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Course.html'>CoursEmbly/Course</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Search-By.html'>CoursEmbly/Search-By</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Search-by-course-category.html'>CoursEmbly/Search-by-course-category</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Search-by-courses.html'>CoursEmbly/Search-by-courses</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Search-by-institute.html'>CoursEmbly/Search-by-institute</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Search-by-instructor.html'>CoursEmbly/Search-by-instructor</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/Uploader-profile-page.html'>CoursEmbly/Uploader-profile-page</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/course-preview.html'>CoursEmbly/course-preview</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/index.html'>CoursEmbly/index</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/say-about-yourself.html'>CoursEmbly/say-about-yourself</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/CoursEmbly/slider-priview.html'>CoursEmbly/slider-priview</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/GiLeadHcp/module-Non-promotional.html'>GiLeadHcp/module-Non-promotional</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/GiLeadHcp/module.html'>GiLeadHcp/module</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Gilead-Liver/module-Non-promotional.html'>Gilead-Liver/module-Non-promotional</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Myissues/Privacy-Settings.html'>Myissues/Privacy-Settings</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Myissues/Rules-Guidelines.html'>Myissues/Rules-Guidelines</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/blessed-fund/index.html'>blessed-fund/index</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/Vanture/index.html'>Vanture</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/agaamin/index.html'>agaamin</a>
                    <a className='live-link' href='https://sarker-rajib.github.io/SuongCity/index.html'>SuongCity</a>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;