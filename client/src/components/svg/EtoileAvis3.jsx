import PropTypes from "prop-types";

function EtoileAvis3({ className }) {
  return (
    <svg
      className={className}
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_239_593)">
        <path
          d="M13.48 17.0789C13.101 13.8492 12.9115 12.2344 13.8711 11.5415C14.8307 10.8487 16.3039 11.5367 19.2502 12.9126L20.0125 13.2686C20.8498 13.6596 21.2684 13.8551 21.7087 13.8656C22.149 13.8762 22.5609 13.7006 23.385 13.3494L24.1353 13.0297C27.0352 11.7939 28.4853 11.1759 29.4703 11.9154C30.4553 12.6548 30.3231 14.262 30.0584 17.4762L29.99 18.3077C29.9148 19.2211 29.8772 19.6778 30.0208 20.1056C30.1645 20.5333 30.4729 20.8836 31.09 21.5844L31.6517 22.2223C33.8229 24.6882 34.9086 25.9211 34.5578 27.0709C34.2069 28.2208 32.652 28.5261 29.5422 29.1367L28.7376 29.2946C27.8539 29.4681 27.412 29.5548 27.0605 29.8086C26.7089 30.0625 26.4876 30.4546 26.0449 31.2388L25.6418 31.9529C24.0837 34.7126 23.3047 36.0926 22.1029 36.0638C20.901 36.035 20.0723 34.6165 18.4149 31.7797L17.9861 31.0458C17.5151 30.2396 17.2796 29.8365 16.9188 29.5656C16.5579 29.2947 16.1126 29.1867 15.222 28.9707L14.4111 28.774C11.2769 28.0139 9.70975 27.6337 9.31782 26.4661C8.92586 25.2984 9.96861 24.1165 12.0541 21.7526L12.5937 21.1411C13.1863 20.4694 13.4826 20.1335 13.6111 19.7123C13.7396 19.2911 13.6858 18.8322 13.5781 17.9144L13.48 17.0789Z"
          fill="#837EBF"
        />
      </g>
      <defs>
        <clipPath id="clip0_239_593">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0.246338 18.2954) rotate(-35.8303)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

EtoileAvis3.propTypes = {
  className: PropTypes.string,
};

EtoileAvis3.defaultProps = {
  className: "",
};

export default EtoileAvis3;
