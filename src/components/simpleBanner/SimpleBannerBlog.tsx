interface props{
  img?:any;
}
const SimpleBannerBlog = ({img}:props) => {
  return (
    <>
      <div className=" bg-principal ">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2">
              <img
                src={img}
                alt="not found"
                className="mx-auto h-[250px] w-full 
            object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div
              className="flex flex-col items-center
       gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left"
            >
              <h1 className="text-3xl font-bold">
                Market your next project with Cosamed
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                cumque odit. Rerum quidem assumenda nulla tempore vitae
                blanditiis consequuntur quas sint dolorem, aliquam, ipsum fugit
                repellendus ratione maiores id atque.
              </p>
              <button className=" btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBannerBlog;
