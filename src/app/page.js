export default function Home() {
  return (
    <div className="bg-blue-950 text-white min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-xl">
          Helping startups achive online <br />pressence with <span className="font-bold">webflow websites</span>
        </h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur  <br/> adipiscing elit. Suspendisse sed ipsum urna. <br/> Pellentesque laoreet dolor et mi faucibus <br/> maximus et eu elit.
        </p>
        <div className="mt-10 flex justify-center items-center">
          <img src="https://assets.website-files.com/61e57244c283e5456130c457/61e929ff713f410571efc78b_hero_illustr.svg" width={200} />
        </div>
        <div className="flex mt-8 justify-center items-center">
        <button class="relative z-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Reuest a Website
            </span>
          </button>
          </div>
      </div>
    </div>
  );
}
