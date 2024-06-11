import React from 'react';

function Home() {
    return (
        <div>
            <div className="navbar bg-gray-900 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Vithu.</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Skills</a></li>
                        <li><a>LinkedIn</a></li>
                        <li><a>GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="hero min-h-screen bg-gray-900 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Hero"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I'm Vithushen Sivasubramaniam!</h1>
                        <h2 className="text-4xl font-bold">
                            And I am a <span className="text-info">Full-Stack Developer</span>
                        </h2>
                        <p className="mt-4">
                            My name is Vithushen Sivasubramaniam and I am a graduate from Concordia University as a Software Engineer and have a passion for programming. Having recently completed my studies and acquired a solid foundation in programming languages. I have strong knowledge in Frontend, Backend, Databases, SRE, Testing and many other skills that I would love to discuss in a interview!
                        </p>
                        <p className="mt-4">Feel free to contact me at vithu.99@hotmail.com!</p>
                        <div className="mt-4">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-info mr-2" onClick={() => document.getElementById('my_modal_3').showModal()}>About Me</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog>
                            <button className="btn btn-outline btn-info">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
