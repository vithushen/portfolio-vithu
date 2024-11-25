import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import vithuImage from '../images/vithu.png';
import vithuImage2 from '../images/vithu-image.png';
import vithuCV from '../images/vithuCV.pdf';

import blip1 from '../images/blip-1.png';
import blip2 from '../images/blip-2.png';
import blip3 from '../images/blip-3.png';
import blip4 from '../images/blip-4.png';
import blip5 from '../images/blip-5.png';
import blip6 from '../images/blip-6.png';
import blip7 from '../images/blip-7.png';

import ryu1 from '../images/ryu-1.png';
import ryu2 from '../images/ryu-2.png';
import ryu3 from '../images/ryu-3.png';
import ryu4 from '../images/ryu-4.png';
import ryu5 from '../images/ryu-5.png';

import datum1 from '../images/datum-1.png';
import datum2 from '../images/datum-2.png';
import datum3 from '../images/datum-3.png';
import datum4 from '../images/datum-4.png';
import datum5 from '../images/datum-5.png';

import covidex1 from '../images/covidex-1.png';
import covidex2 from '../images/covidex-2.png';
import covidex3 from '../images/covidex-3.png';

import nba1 from '../images/nba-1.png';
import nba2 from '../images/fantasy.png';

import mave1 from '../images/mave-1.png';
import mave2 from '../images/mave-2.png';
import mave3 from '../images/mave-3.png';
import mave4 from '../images/mave-4.png';

import eldr1 from '../images/elder-1.png';
import eldr2 from '../images/elder-2.png';
import eldr3 from '../images/elder-3.png';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const maxWords = 500;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setUserSubject(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            user_email: userEmail,
            subject: userSubject,
            message: message
        };

        emailjs.send('service_6yjvo48', 'template_xwnv2tr', templateParams, 'PnxEJdFPtRShqkXqO')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setAlertMessage('Email sent successfully!');
                setAlertType('success');
                setMessage('');
                setUserEmail('');
                setUserSubject('');
                document.getElementById('my_modal_3').close(); // Close dialog on success

            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setAlertMessage('Error sending email. Please try again.');
                setAlertType('error');
            })
            .finally(() => {
                // Clear alert message after 5 seconds
                setTimeout(() => {
                    setAlertMessage('');
                    setAlertType('');
                }, 5000); // 5000 milliseconds = 5 seconds
            });
    };

    const wordCount = () => {
        const words = message.trim().split(/\s+/).filter(Boolean);
        return words.length;
    };

    const aboutMeRef = useRef(null);

    // Function to scroll to About Me section
    const scrollToAboutMe = () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const myProjectRef = useRef(null);

    // Function to scroll to About Me section
    const scrollToProjectRef = () => {
        myProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    // Assuming you have project data
    const initialProjects = [
        {
            id: 1,
            title: 'Blip Barber',
            year: 2024,
            description: 'Our platform serves as a dynamic marketplace, connecting skilled home barbers with customers seeking affordable and convenient haircuts right in their neighborhood. Designed with both barbers and customers in mind, our application offers a seamless experience for both parties. Barbers gain a powerful platform to showcase their services and reach a broader audience, while customers can easily browse and book appointments with trusted barbers nearby. Stay tuned as we continue to develop this exciting project, shaping the future of home barbering and enhancing accessibility to quality haircare services for all.',
            images: [
                blip1,
                blip2,
                blip3,
                blip4,
                blip5,
                blip6,
                blip7
            ],
            demoLink: 'https://www.youtube.com/watch?v=AWpmPlN0q5o',
            sourceLink: 'https://github.com/vithushen/blip'


        },
        {
            id: 2,
            title: 'RYU Inventory',
            year: 2024,
            description: 'A user-friendly web application designed for the Ryu Restaurant manager to efficiently keep track and maintaining their inventory. With our intuitive interface, managers can effortlessly perform inventory counts at the end of each month, ensuring accurate reporting. Our application allows users to easily add, remove, or edit products within their inventory database, providing ultimate flexibility and control. Before using our application, they were using excel spreadsheets but now making it much more simple with a digital approach to inventory management.',
            images: [
                ryu1,
                ryu2,
                ryu3,
                ryu4,
                ryu5
            ],
            demoLink: 'https://www.youtube.com/watch?v=HBRPCgAwtnI',
            sourceLink: 'https://github.com/vithushen/ryu-lavia'

        },
        {
            id: 3,
            title: 'Datum.io',
            year: 2023, // Add the year for this project
            description: 'The purpose of this project is to design a mobile application to allow researchers to collect data for a specific study that encourages repeated engagement through gamification. A user-centered approach will be applied to encourage usability and engagement. The application would be usable for a variety of different research studies (e.g. mental health studies, product engagement studies, etc.). Hence, it could be used in a wide array of fields.',
            images: [
                datum1,
                datum2,
                datum3,
                datum4,
                datum5
            ],
            demoLink: 'https://datum-io.app/',
            sourceLink: 'https://github.com/HamzahSheikh/datum.io'

        },
        {
            id: 4,
            title: 'Covidex',
            year: 2022, // Add the year for this project
            description: 'Covidex is a covid-19 tracking application designed for multiple users such as common patients, doctors, health officials and and immigration officials. Its goal is to help us deal with the reality of the situation we currently face and try to move forward. Patients would be able to upload their health status details onto the platform. This in turn would be monitored by both doctors and health officials to both help the patients as well as track the progress of the virus. We would be able to monitor daily cases and get a better understanding of how the virus is changing to help mitigate the risks for the rest of the population.',
            images: [
                covidex2,
                covidex1,
                covidex3
            ],
            demoLink: 'https://covidex.live/',
            sourceLink: 'https://github.com/HamzahSheikh/covidex-public'

        },
        {
            id: 5,
            title: 'NBA Fantasy Helper',
            year: 2023, // Add the year for this project
            description: 'NBA Fantasy Draft Helper is your ultimate companion for building a winning fantasy basketball team! This innovative project brings together the power of data and user-friendly design, providing NBA enthusiasts with a comprehensive tool to make the best decisions during their fantasy drafts. NBA Stats Explorer simplifies the process of understanding player performance by offering a visually appealing and easy-to-navigate platform. Whether youre a fantasy basketball enthusiast, a sports analyst, or just a passionate NBA fan, this tool provides a unique perspective on player capabilities, fostering a deeper appreciation for the game.',
            images: [
                nba1,
                nba2
            ],
            demoLink: 'https://vithushen.github.io/NBA-Fantasy-Helper/',
            sourceLink: 'https://github.com/vithushen/NBA-Fantasy-Helper'

        },
        {
            id: 6,
            title: 'Mave Grocery Store',
            year: 2021, // Add the year for this project
            description: 'Mave Grocery Store project is a web application where customers can experience the convenience of grocery shopping from the comfort of their homes. By creating a personalized account, users gain access to a vast array of products from fresh produce to cleaning supplies. Our user-friendly interface allows customers to browse through a catalog, add items to their cart and securely complete their purchases online. With simple navigation, secure payment options and timely delivery services, our web application redefines the way people shop for groceries, making it effortless, efficient, and enjoyable.',
            images: [
                mave1,
                mave2,
                mave3,
                mave4
            ],
            demoLink: 'https://mave-grocery.web.app/index.html',
            sourceLink: 'https://github.com/Ellendra-JH/mave'

        },
        {
            id: 7,
            title: 'Eldr ',
            year: 2021, // Add the year for this project
            description: 'Eldr is a friendly app made for elderly people. It helps them talk to others, play games, and make new friends easily. The app is easy to use and makes seniors feel less lonely by connecting them with others. The Figma project and mockup website show how Eldr works, making it simple for everyone to understand its purpose: bringing happiness and friendship to older adults. Eldr is all about making seniors lives better by connecting them with others in a fun and easy way.',
            images: [
                eldr1,
                eldr2,
                eldr3
            ],
            demoLink: 'https://www.figma.com/proto/AeMKmKMeebpAjkK44w4yGK/Soen-357-Mini-Project?node-id=39-689&starting-point-node-id=39%3A590',
            sourceLink: 'http://localhost:3000/'

        }
    ];

    const [projects, setProjects] = useState(initialProjects);
    const [currentImageIndex, setCurrentImageIndex] = useState(projects.map(() => 0));

    const handlePreviousImage = (projectId) => {
        setCurrentImageIndex((prevIndexes) =>
            prevIndexes.map((index, id) => (id === projectId ? (index > 0 ? index - 1 : projects[id].images.length - 1) : index))
        );
    };

    const handleNextImage = (projectId) => {
        setCurrentImageIndex((prevIndexes) =>
            prevIndexes.map((index, id) => (id === projectId ? (index < projects[id].images.length - 1 ? index + 1 : 0) : index))
        );
    };

    return (
        <div className='bg-gray-900 text-white'>
            {/* Navbar */}
            <div className="navbar flex justify-between items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {/* Logo or Text */}
                <div className="hidden sm:block">
                    <a className="btn btn-ghost text-info text-5xl" style={{ fontFamily: 'Anton, sans-serif' }}>Vithu.</a>
                </div>
                {/* Menu Icon (only in mobile view) */}
                <div className="flex items-center sm:hidden">
                    <button className="btn btn-ghost text-info text-3xl" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                {/* Regular Navbar Items (hidden in mobile view) */}
                <div className="hidden sm:flex sm:items-center space-x-8"> {/* Added space-x-8 for spacing between links */}
                    <ul className="menu menu-horizontal text-lg space-x-8"> {/* Increased font size */}
                        <li><a>Home</a></li>
                        <li><a onClick={scrollToAboutMe}>About Me</a></li> {/* Added onClick handler */}
                        <li><a onClick={scrollToProjectRef}>My Projects</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vithushen-sivasubramaniam/">LinkedIn</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/vithushen">GitHub</a></li>
                    </ul>
                </div>
            </div>

            {/* Dropdown Menu (only in mobile view) */}
            {menuOpen && (
                <div className="sm:hidden flex justify-center mt-4"> {/* Added mt-4 for top margin */}
                    <ul className="menu menu-vertical text-lg">
                        <li><a className="text-white block py-2 hover:bg-gray-800 bg-info">Home</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800" onClick={scrollToAboutMe}>About Me</a></li> {/* Added onClick handler */}
                        <li><a onClick={scrollToProjectRef} className="text-info block py-2 hover:bg-gray-800">My Projects</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800" href="https://www.linkedin.com/in/vithushen-sivasubramaniam/">LinkedIn</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800" href="https://github.com/vithushen">GitHub</a></li>
                    </ul>
                </div>
            )}
               {alertMessage && (
                <div className={`alert alert-success`}>
                    {alertMessage}
                </div>
            )}
 {/* Hero Section */}
<div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
        <img
            src={vithuImage}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[36rem] lg:h-[36rem] rounded-full mb-6 sm:mb-8 md:mb-10 lg:mb-0 lg:ml-8"
            alt="Hero"
            style={{
                boxShadow: '0 4px 6px rgba(56, 189, 248, 0.9)' // Replace with the shadow color you want
            }}
        />
        <div className="text-center lg:text-left max-w-lg px-4 sm:px-8 md:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Hi, I'm Vithushen Sivasubramaniam!</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
                And I am a <span className="text-info">Full-Stack Developer</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
                My name is Vithushen Sivasubramaniam and I am a graduate from Concordia University as a Software Engineer with a passion for programming. I have recently completed my studies and acquired a solid foundation in programming languages, with strong knowledge in Frontend, Backend, Databases, SRE, Testing, and many other skills that I would love to discuss in an interview!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                <button className="btn btn-info mb-4 sm:mb-0 sm:mr-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Contact Me</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-gray-900 p-8 rounded-lg">
                        <form onSubmit={sendEmail}>
                            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                            <h1 className="text-3xl font-bold mb-4 text-center">Send a Message to Vithu!</h1>
                            <label htmlFor="userEmail" className="block mb-2">From:</label>
                            <input
                                type="email"
                                id="userEmail"
                                name="userEmail"
                                className="w-full px-4 py-2 mb-4 border rounded-lg text-black"
                                placeholder="Enter your email"
                                value={userEmail}
                                onChange={handleEmailChange}
                                required
                            />
                            <label htmlFor="userSubject" className="block mb-2">Subject:</label>
                            <input
                                type="text"
                                id="userSubject"
                                name="userSubject"
                                className="w-full px-4 py-2 mb-4 border rounded-lg text-black"
                                placeholder="Enter your Subject"
                                onChange={handleSubjectChange}
                                required
                            />
                            <textarea
                                id="emailContent"
                                name="emailContent"
                                className="w-full px-4 py-2 mb-4 border rounded-lg text-black"
                                rows="6"
                                maxLength="500"
                                placeholder="Enter your message (500 words max)"
                                value={message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="text-right text-gray-500 mb-3">{wordCount()}/{maxWords}</div>
                            <button type="submit" className="btn btn-info text-white float-right">Send</button>
                        </form>
                    </div>
                </dialog>
                <a href={vithuCV} target="_blank" rel="noopener noreferrer" download className="btn btn-outline btn-info">Download CV</a>
            </div>
        </div>
    </div>
</div>



            {/* About Me Section */}
            <div ref={aboutMeRef} className="hero min-h-screen bg-gray-800 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={vithuImage2}
                        className="rounded-lg shadow-2xl w-72 h-73 lg:w-96 lg:h-full mt-20"
                        style={{
                            boxShadow: '0 2px 8px rgba(56, 189, 248, 0.9)', // Replace with the shadow color you want
                            marginRight: '2rem' // Add margin to the right of the image
                        }}
                        alt="About Me"
                    />
                    <div className="lg:ml-8"> {/* Added margin-left to the text container */}
                        <h1 className="text-5xl font-bold text-center">About Me</h1>
                        <h1 className="text-5xl font-bold text-center">____________</h1>
                        <div className="flex flex-wrap justify-center lg:justify-start w-full mt-12 gap-5">
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Expertise</p>
                                <p className="text-sm text-white">Software Development</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Location</p>
                                <p className="text-sm text-white">Montreal, Qc</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Education</p>
                                <p className="text-sm text-white">Concordia University</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Graduation</p>
                                <p className="text-sm text-white">June 2023</p>
                            </div>
                        </div>

                        <p className="py-6 text-center lg:text-left">After 5 years of programming, I have learned a lot in frontend and backend development, particularly in React with proficiency in HTML, CSS, JavaScript, Java, Python and SQL. I have a portfolio of user-friendly, responsive websites, showcasing my dedication to creating user experiences. Collaborating within teams of various sizes, I have successfully worked on projects using Agile and Scrum methodologies, demonstrating my ability to work in a collaborative and fast-paced environment using Github and Jira.</p>

                        <p className="py-0 text-center lg:text-left">I have also received a certification in the Foundation of SRE from Wiley Edge Academy. This certification has equipped me with advanced skills in executing Production Support and Site Reliability Engineering responsibilities. Utilizing tools such as Kubernetes, Grafana, and Prometheus, I've gained experience in monitoring website performance to ensure optimal operation and reliability. Moreover, I've implemented automation strategies to reduce manual tasks and toil, thereby enhancing efficiency and reliability in website operations. Furthermore, I've developed robust testing procedures using Jenkins, automating testing processes to maintain code quality and reliability throughout the development lifecycle.</p>
                    </div>
                </div>
            </div>


            {/* MyProj Section */}
            <div ref={myProjectRef} className="bg-gray-900 text-white py-20">
                <h1 className="text-5xl font-bold text-center mb-5">My Projects</h1>
                <h1 className="text-5xl font-bold text-center">____________</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 mt-10">
                    {/* Mapping through projects to create cards */}
                    {projects.map((project, projectId) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl relative">
                            <div className="relative w-full overflow-hidden">
                                {/* Adjusted the width and height of the image */}
                                <img
                                    src={project.images[currentImageIndex[projectId]]}
                                    alt={project.title}
                                    className="w-full h-64 sm:h-80 md:h-96" // Adjust the height for different screen sizes
                                />
                                <button
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                    onClick={() => handlePreviousImage(projectId)}
                                >
                                    &#9664;
                                </button>
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                    onClick={() => handleNextImage(projectId)}
                                >
                                    &#9654;
                                </button>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{project.title} ({project.year})</h2>
                                <p className="text-gray-300 mt-5">{project.description}</p>
                                <div className="mt-7 flex justify-end">
                                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Source Code</a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-info ml-3">View Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer footer-center p-4 bg-gray-800 text-base-content">
                <aside>
                    <p style={{ color: 'white' }}>Copyright © 2024 - All right reserved by Vithushen Sivasubramaniam</p>
                </aside>
            </footer>
        </div>
    );
}

export default Home;
