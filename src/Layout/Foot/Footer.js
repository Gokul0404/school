import React from 'react'
import { Container, Image } from 'react-bootstrap';
import '../Foot/Footer.css'

export default function Footer() {
  return (
    <div className="Fot_Main">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,192C672,203,768,149,864,112C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="Fo_Img">
        <Image
          src={require("../../assets/Images/fo_boy.png")}
          width={200}
          className="imge_Foter"
        />
      </div>

      <Container className="pt-5">
        <div className="Fa_List">
          <span className="Fa_Span">
            <li className="px-3">Home</li>
            <li className="px-3">Administration</li>
            <li className="px-3">Faculty</li>
            <li className="px-3">Photo Gallery</li>
            <li className="px-3">Bookmarks</li>
            <li className="px-3">Contact</li>
          </span>
        </div>

        <div className="Fa_List_1">
          <span className="Fa_Span_1 pt-3">
            <p className="Fo_Follow pt-2">Follow Us:</p>
            <i class="bi bi-instagram px-3 fs-4"></i>
            <i class="bi bi-facebook px-3 fs-4"></i>
            <i class="bi bi-twitter px-3 fs-4"></i>
            <i class="bi bi-linkedin px-3 fs-4"></i>
            <i class="bi bi-whatsapp px-3 fs-4"></i>
          </span>
        </div>

        <div className="Fa_List_2 text-center pt-5">
          <span className="Fo_Copy">
            <p>Copyright @ 2023 | abc.com</p>
            <p>more that can some else if that find for me</p>
          </span>
        </div>
      </Container>
    </div>
  );
}
