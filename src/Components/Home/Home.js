import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='mx-auto mt-10'>
                <img className='w-[90%] hover:border-2 border-pink-600 mx-auto' src="https://as1.ftcdn.net/v2/jpg/05/10/90/44/1000_F_510904418_todZ0yn2Hon9GGHytQ8N4yFRsp2F4F40.jpg" alt="" />
            </div>
            <section className="text-back">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://as2.ftcdn.net/v2/jpg/01/28/86/99/1000_F_128869985_NlefiZczFjSppAahkhxDDwOmeNKb0WcD.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" md:text-5xl font-bold leading-none">Ac mattis
                            <span className="text-violet-400">senectus</span>erat pharetra
                        </h1>
                        <p className="mt-6 mb-8 md:text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer <br className="hidden md:inline lg:hidden"></br>
                            turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Malesuada</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;