/* eslint-disable react/prop-types */




const ShowFeedback = ({data}) => {
    console.log(data);

   
    return (
        <div key={data._id} className="mb-12 md:mb-0 shadow-2xl p-6 hover:border-2 transition-all hover:border-amber-400 rounded-xl">
        <div className="mb-6 flex justify-center">
          <img
            src={data?.photo}
            className="w-32 rounded-full shadow-lg dark:shadow-black/30 hover:scale-105 transition-all"/>
        </div>
        <h5 className="mb-4 text-xl font-semibold">{data.displayName}</h5>
       
        <p className="mb-4 ">
          <span className="inline-block pe-2 [&>svg]:w-5"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512">
             
              <path
                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
          </span>
          {data.reviewData.message}
        </p>
        <ul className="mb-0 flex items-center justify-center">
    
          <li className="flex items-center gap-3">Ratings : {data.reviewData.rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-yellow-500">
              <path
                
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                 />
            </svg>
          </li>
        
        </ul>
      </div>
      );
};

export default ShowFeedback;