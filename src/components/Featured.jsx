import { BsPlayFill as PlayIcon } from 'react-icons/bs';
import { BiInfoCircle as InfoIcon } from 'react-icons/bi';

const Featured = () => {
  return (
    <section className='featured'>
      <div className='featured__container'>
        <img src='' alt='movie name' className='featured__img' />
        <p className='featured__text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          perspiciatis non cum laboriosam esse labore nesciunt ipsa tenetur nam
          dolore doloremque excepturi officia consequuntur maxime consequatur
          iure ipsum minus, eveniet fuga minima, dolorum, recusandae incidunt
          eum. Non est magnam accusantium.
        </p>
        <div className='featured__buttons'>
          <button className='featured__play'>
            <PlayIcon className='featured__icon' />
            Play
          </button>
          <button className='featured__info'>
            <InfoIcon className='featured__icon' />
            Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
