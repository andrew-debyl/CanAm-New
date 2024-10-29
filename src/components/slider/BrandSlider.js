import { Swiper, SwiperSlide } from "swiper/react";
import { brandSliderProps } from "../../sliderProps";
import { useRef } from "react";
import Image from "next/image";

const BrandSlider = () => {
  const swiperRef = useRef(null);

  const goToPrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="brand-slider-container">
      <button className="slider-button left" onClick={goToPrevious}>
        &#10094;
      </button>
      <Swiper
        {...brandSliderProps}
        className="partner-one__carousel owl-carousel owl-theme list-unstyled"
        ref={swiperRef}
      >
        <SwiperSlide className="partner-one__single">
          <div className="partner-one__img">
            <div>
              <Image
                src="/assets/images/brand/xerox-logo.png"
                alt="xerox logo"
                width={180}
                height={100}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="partner-one__single">
          <div className="partner-one__img">
            <div>
              <Image
                src="/assets/images/brand/ricoh-logo.png"
                alt="ricoh logo"
                width={180}
                height={100}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="partner-one__single">
          <div className="partner-one__img">
            <div>
              <Image
                src="/assets/images/brand/konica-logo.png"
                alt="konica logo"
                width={180}
                height={100}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="partner-one__single">
          <div className="partner-one__img">
            <div>
              <Image
                src="/assets/images/brand/kodak-logo.png"
                alt="kodak logo"
                width={180}
                height={100}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="partner-one__single">
          <div className="partner-one__img">
            <div>
              <Image
                src="/assets/images/brand/canon-logo.png"
                alt="canan logo"
                width={180}
                height={100}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="slider-button right" onClick={goToNext}>
        &#10095;
      </button>

      <style jsx>{`
        .slider-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.7);
          border: none;
          cursor: pointer;
          font-size: 24px;
          padding: 10px;
          z-index: 10; /* Ensure buttons are above the slider */
        }
        .slider-button.left {
          left: 10px;
        }
        .slider-button.right {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
