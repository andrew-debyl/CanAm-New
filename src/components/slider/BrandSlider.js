import { Swiper, SwiperSlide } from "swiper/react";
import { brandSliderProps } from "../../sliderProps";

const BrandSlider = () => {
  return (
    <Swiper
      {...brandSliderProps}
      className="partner-one__carousel owl-carousel owl-theme list-unstyled"
    >
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <div>
            <img src="assets/images/brand/xerox-logo.png" alt="image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <div>
            <img src="assets/images/brand/ricoh-logo.png" alt="image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <div>
            <img src="assets/images/brand/konica-logo.png" alt="image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <div>
            <img src="assets/images/brand/kodak-logo.png" alt="image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <div>
            <img src="assets/images/brand/canon-logo.png" alt="image" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSlider;
