import { useState } from "react";

export default function Card({ name, githubuser, avatar, comment }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 267;
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const text = comment.length > maxLength && !isExpanded ? `${comment.substring(0, maxLength)}...` : comment;

  // console.log(avatar);

  return (
    <div className=" bg-green-200 flex flex-col gap-8 p-9 rounded-2xl  dark:bg-purple-2 w-small lg:w-extraMedium ">
      <p className="text-mobile-extraMini font-bold leading-4 h-full lg:min-h-28 lg:max-h-32 relative text-gray-1 lg:leading-desktop-larger lg:text-desktop-extraMini">

        &#34;{text}&#34;

        <span>
          {text && (
            <span onClick={toggleExpanded} className="absolute w-full top-28 left-64 text-blue-1 cursor-pointer">
              {
                !isExpanded && comment.length < maxLength ? null : isExpanded && comment.length > maxLength ? "Show less" : "Read more"

              }
            </span>
          )}
        </span>

      </p>
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-black-1 lg:h-14 lg:w-14 overflow-hidden">
          <img src={avatar} alt="Foto dos usuários" />
        </div>
        <div className="flex flex-col dark:text-white-1">
          <span className="text-mobile-extraMini font-bold lg:text-desktop-extraSmall">
            {name}
          </span>
          <span className="text-mobile-mini lg:text-desktop-mini">
            {githubuser}
          </span>
        </div>
      </div>
    </div>
  );
}
