import React, { useState } from 'react';
import vithuImage from '../images/vithu.png';
import vithuImage2 from '../images/vithu-image.png';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');

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

    const sendEmail = () => {
        // You can implement sending email functionality here
        // For now, let's just log the email content
        console.log("Email Sent!");
    };

    const wordCount = () => {
        const words = message.trim().split(/\s+/).filter(Boolean);
        return words.length;
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
                        <li><a>About Me</a></li>
                        <li><a>Skills</a></li>
                        <li><a>My Projects</a></li>
                        <li><a href="https://www.linkedin.com/in/vithushen-sivasubramaniam/">LinkedIn</a></li>
                        <li><a href="https://github.com/vithushen">GitHub</a></li>
                    </ul>
                </div>
            </div>

            {/* Dropdown Menu (only in mobile view) */}
            {menuOpen && (
                <div className="sm:hidden flex justify-center mt-4"> {/* Added mt-4 for top margin */}
                    <ul className="menu menu-vertical text-lg">
                        <li><a className="text-white block py-2 hover:bg-gray-800 bg-info">Home</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800">About Me</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800">Skills</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800">My Projects</a></li>
                        <li><a className="text-info block py-2 hover:bg-gray-800" href="https://www.linkedin.com/in/vithushen-sivasubramaniam/">LinkedIn</a></li> 
                        <li><a className="text-info block py-2 hover:bg-gray-800" href="https://github.com/vithushen">GitHub</a></li> 
                    </ul>
                </div>
            )}

            {/* Hero Section */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={vithuImage}
                        className="w-96 h-96 lg:w-[36rem] lg:h-[36rem] rounded-full mb-8 lg:mb-0 lg:ml-8"
                        alt="Hero"
                        style={{
                            boxShadow: '0 4px 6px rgba(56, 189, 248, 0.9)' // Replace with the shadow color you want
                        }}
                    />
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Hi, I'm Vithushen Sivasubramaniam!</h1>
                        <h2 className="text-4xl font-bold py-2">
                            And I am a <span className="text-info">Full-Stack Developer</span>
                        </h2>
                        <p className="mt-4">
                            My name is Vithushen Sivasubramaniam and I am a graduate from Concordia University as a Software Engineer and have a passion for programming. Having recently completed my studies and acquired a solid foundation in programming languages. I have strong knowledge in Frontend, Backend, Databases, SRE, Testing and many other skills that I would love to discuss in an interview!
                        </p>
                        <div className="mt-4">
                            <button className="btn btn-info mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}>Contact Me</button>
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
                                            className="w-full px-4 py-2 mb-4 border rounded-lg"
                                            placeholder="Enter your email"
                                            value={userEmail}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        <label htmlFor="emailTo" className="block mb-3">To: Vithu.99@hotmail.com</label>
                                        <textarea
                                            id="emailContent"
                                            name="emailContent"
                                            className="w-full px-4 py-2 mb-4 border rounded-lg"
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
                            <button className="btn btn-outline btn-info">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="hero min-h-screen bg-gray-800 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={vithuImage2} className="rounded-lg shadow-2xl w-96 h-96 lg:w-[60rem] lg:h-[60rem]" alt="About Me" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <h1 className="text-5xl font-bold">____________</h1>
                        <div className="flex flex-wrap justify-center lg:justify-start w-full mt-12 gap-5">
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Expertise</p>
                                <p className="text-sm">Software Development</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Location</p>
                                <p className="text-sm">Montreal, Qc</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Education</p>
                                <p className="text-sm">Concordia University</p>
                            </div>
                            <div className="grid h-20 card bg-info rounded-box place-items-center text-black w-[175px]">
                                <p className='font-bold'>Graduation</p>
                                <p className="text-sm">June 2023</p>
                            </div>
                        </div>

                        <p className="py-6">After 5 years of programming, I have learned a lot in frontend and backend development, particularly in React with proficiency in HTML, CSS, JavaScript, Java, Python and SQL. I have a portfolio of user-friendly, responsive websites, showcasing my dedication to creating user experiences. Collaborating within teams of various sizes, I have successfully worked on projects using Agile and Scrum methodologies, demonstrating my ability to work in a collaborative and fast-paced environment using Github and Jira.</p>

                        <p className="py-0">I have also received a certification in the Foundation of SRE from Wiley Edge Academy. This certification has equipped me with advanced skills in executing Production Support and Site Reliability Engineering responsibilities. Utilizing tools such as Kubernetes, Grafana, and Prometheus, I've gained experience in monitoring website performance to ensure optimal operation and reliability. Moreover, I've implemented automation strategies to reduce manual tasks and toil, thereby enhancing efficiency and reliability in website operations. Furthermore, I've developed robust testing procedures using Jenkins, automating testing processes to maintain code quality and reliability throughout the development lifecycle.</p>

                        <button className="btn btn-info mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
