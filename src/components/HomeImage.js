import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  33.33%, 66.66% {
    opacity: 1;
  }
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${({ fade }) =>
    fade
      ? css`
          ${fadeInOut} 3s infinite
        `
      : "none"};

  /* Add the classes here */
  &.one-third {
    width: 33.3333%;
  }
  &.js-fullheight {
    height: 100vh;
  }

  &.align-self-end {
    align-self: flex-end;
  }

  &.order-md-last {
    /* Add your order styles here */
  }

  &.img-fluid {
    max-width: 100%;
    height: auto;
  }
`;
export const HomeImage = () => {
  const imagePaths = [
    "images/creer3.png",
    "images/creer2.png",
    "images/creer.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Image
      fade={true}
      className="one-third align-self-end order-md-last img-fluid home-sectio_img"
      src={imagePaths[currentImageIndex]}
      alt=""
    />
  );
};
