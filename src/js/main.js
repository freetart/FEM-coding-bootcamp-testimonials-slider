import Glide from "@glidejs/glide";

const quotesCarousel = () => {
  const quotesCarouselConfig = {
    type: "carousel",
    autoplay: 5000,
    perView: 1,
  };

  new Glide(".glide", quotesCarouselConfig).mount();
};
quotesCarousel();
