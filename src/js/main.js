import Glide from "@glidejs/glide";

const quotesCarousel = () => {
  const quotesCarouselConfig = {
    type: "carousel",
    autoplay: 12000,
    perView: 1,
    hoverpause: true,
  };

  new Glide(".glide", quotesCarouselConfig).mount();
};
quotesCarousel();
