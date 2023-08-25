import { styled, keyframes } from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 10px;
  bottom: 50px;
  z-index: 1000;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
    color: #28a745;
  }
  50% {
    transform: translateY(-15px);
    color: #339933;
  }
`;

const WhatsAppIcon = styled.a`
  animation: ${bounceAnimation} 1s infinite;
  cursor: pointer;
  display: inline-block; /* Ensure the link takes up space */
`;

const Icon = styled.i`
  font-size: 4rem;
`;

export const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(
      "Hi, I would like to have a call for counseling."
    );
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <Container>
      <WhatsAppIcon onClick={handleWhatsAppClick}>
        <Icon className="fab fa-whatsapp"></Icon>
      </WhatsAppIcon>
    </Container>
  );
};
