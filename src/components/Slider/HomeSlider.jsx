import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const HomeSlider = () => {
  // Styles for the carousel arrows
  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    fontSize: '2rem',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="w-full bg-gray-100">
      <Carousel
        showArrows={true}
        autoPlay
        interval={2500}
        infiniteLoop
        showIndicators={true}  
        showThumbs={false}     
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: '10px' }}
            >
              &#8249;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: '10px' }}
            >
              &#8250;
            </button>
          )
        }
      >
        {/* Banner Images */}
        <div>
          <img src="/images/banner1.png" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/banner2.png" alt="Banner 2" />
        </div>
        <div>
          <img src="/images/banner3.png" alt="Banner 3" />
        </div>
        <div>
          <img src="/images/banner4.png" alt="Banner 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
