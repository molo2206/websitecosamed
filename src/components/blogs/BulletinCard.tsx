interface props{
  bulletin?:any
}

const BulletinCard = ({bulletin}:props) => {
  return (
    <>
    <div className="p-4 shadow-lg">
      <div className=" overflow-hidden">
        <img
          src={bulletin?.image}
          alt="not found"
          className="mx-auto h-[250px] w-full 
          object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className=" flex justify-between py-2 text-slate-600">
        <p>{bulletin?.updated_at	}</p>
        <p className=" line-clamp-1">{}</p>
      </div>
      <div className="space-y-2 py3">
        <h1 className=" line-clamp-1 font-bold">
          How to grow business. How to grow your businessHow to grow business.
          How to grow your business.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea
          minima quisquam, consequatur quod iste, rem odio eveniet aliquid
          ipsam facere ab debitis, dignissimos quis! Enim quisquam quidem
          molestias veniam alias, itaque voluptates est repellat quo vel ipsam
          eligendi officia!
        </p>
      </div>
    </div>
  </>
  )
}

export default BulletinCard