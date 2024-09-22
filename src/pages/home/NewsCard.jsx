import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title,thumbnail_url,details,_id,image_url}=news
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>

        {
        details.length > 200 ?  <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='font-semibold text-green-600'>
        Read More....
        </Link></p> :
        <p>
            { details }
        </p>
    }
        
  </div>
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
</div>
            
        
        </div>
    );
};

export default NewsCard;