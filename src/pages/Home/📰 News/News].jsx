
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const News = ({news}) => {

      const {title, details,image_url,_id} = news;
      return (
            <div className='px-3'>
                  <img src={image_url} alt="" />
                  
                  <h1 className='text-3xl py-3 font-bold'>{title}</h1>
                  {details.length > 200 ?
                   <p>{details.slice(0,200)} <Link className='text-blue-600 font-bold' to={`news/${_id}`}>Read more...</Link></p> 

                   :<p>{details}</p>}
            </div>
      );
};

News.propTypes = {
      news:PropTypes.object.isRequired,
      details:PropTypes.string.isRequired,

}

export default News;