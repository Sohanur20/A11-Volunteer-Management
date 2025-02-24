/* eslint-disable react/no-unknown-property */


const Work = () => {
    return (
        <div>
          <div className="min-h-screen bg-gradient-to-r from-sky-200 to-red-100 py-20">
    <h1 className="text-5xl font-bold text-center pb-10"><span className="text-blue-700">How</span> We Work</h1>

    <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
        <div className="flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
                <div className="w-[120px] h-[120px] bg-white shadow-lg rounded-xl p-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl pb-4">1. Collect Requirements</h1>
                <p>
                    We gather detailed requirements from organizations and individuals looking for volunteers. This involves understanding the nature of the work, skills required, time commitment, and any other specific needs to ensure the right volunteers are matched with the right opportunities.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
                <div className="w-[120px] h-[120px] shadow-lg bg-white rounded-xl p-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl">2. Analyze the Requirements</h1>
                <p>
                    Our team reviews and analyzes the collected requirements to identify key skills and attributes needed for the volunteer roles. This ensures that the opportunities are clearly defined and that we can attract suitable volunteers.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[750px] flex justify-center md:justify-end">
                <div className="w-[120px] shadow-lg h-[120px] bg-white rounded-xl p-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl">3. Sort Out Possible Solutions</h1>
                <p>
                    Based on the analysis, we brainstorm and identify the best strategies for recruiting and engaging volunteers. This includes leveraging our network, utilizing various platforms, and tailoring our outreach efforts to match volunteers with opportunities that suit their skills and interests.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
                <div className="shadow-lg w-[120px] h-[120px] bg-white rounded-xl p-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                        <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl">4. Implement the Best Solution</h1>
                <p>
                    We execute the selected strategies to recruit volunteers, including creating engaging content, hosting informational sessions, and providing a seamless application process. Our goal is to ensure that volunteers feel valued and are effectively onboarded to their roles.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:bg-transparent rounded-xl gap-10">
            <div className="flex justify-center md:justify-end">
                <div className="w-[120px] h-[120px] bg-white shadow-lg rounded-xl p-4 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                <h1 className="font-bold text-xl">5. Submit and Wait for Feedback</h1>
                <p>
                    After implementation, we submit the list of recruited volunteers to the organization and wait for feedback. We ensure continuous communication and support, addressing any issues and making adjustments as needed to enhance the volunteer experience.
                </p>
            </div>
        </div>
    </div>
</div>
  
        </div>
    );
};

export default Work;