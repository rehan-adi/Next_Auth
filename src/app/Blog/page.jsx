export default async function page() {

  const res =  await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json();
  const limitedData = data.slice(0, 8);

  const groupedData = [];
  for (let i = 0; i < limitedData.length; i += 4) {
    groupedData.push(limitedData.slice(i, i + 4));
  }

  return (
    <div className='w-auto flex justify-center flex-col items-center text-white bg-blue-950 h-[130vh]'>
        <h1 className="text-2xl mb-12 font-semibold">Our Blog</h1>
        {groupedData.map((group, index) => (
          <div key={index} className="flex justify-center items-center gap-4">
            {group.map((photo) => (
              <div key={photo.id}>
                <img src={photo.url} width={200} alt={photo.title} />
                <p className="text-black">{photo.title}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}
