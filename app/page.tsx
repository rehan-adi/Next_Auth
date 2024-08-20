import axios from 'axios';

async function getUserDetails() {

    const response = await axios.get(
        'https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details'
    );
    return response.data;

}

export default async function Home() {
    const userData = await getUserDetails();

    return (
        <div className="bg-[#000924] text-white">
            <nav className='border-b flex fixed top-0 justify-between items-center border-white border-opacity-10 w-full lg:px-20 px-6 h-20'>
                 <h1>Logo</h1>
                 <button className='bg-blue-600 rounded-full px-3 lg:px-5 py-2'>Logout</button>
            </nav>
            <div className="flex justify-center bg-[#000924] h-screen items-center">
                <div className="border p-8 rounded">
                    <div>Name: {userData?.name}</div>

                    {userData?.email}
                </div>
            </div>
        </div>
    );
}
