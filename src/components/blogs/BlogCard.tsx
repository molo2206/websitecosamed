import { Link } from "react-router-dom";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";

interface props {
  blog?: any;
}

const BlogCard = ({ blog }: props) => {
  const {lang} = useAuthContext();
  return (
    <>
      <Link to={`/blog/detail/`+blog?.id} onClick={() => window.scroll}>
        <div className="p-4 shadow-lg">
          <div className="overflow-hidden">
            <img 
              src={blog?.image}
              alt="not found"
              className="mx-auto h-[250px] w-full 
            object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className=" flex justify-between py-2 text-slate-600">
            <p>{blog?.publication_date}</p>
            <p className=" line-clamp-1">{blog?.author.full_name}</p>
          </div>
          <div className="space-y-2 py3">
            <h1 className="font-montserrat line-clamp-1 font-bold" dangerouslySetInnerHTML={{__html: showingTranslateValue(blog?.translations, lang)?.title}}>
            </h1>
            <p className="font-montserrat line-clamp-5" dangerouslySetInnerHTML={{__html: showingTranslateValue(blog?.translations, lang)?.description}}>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
