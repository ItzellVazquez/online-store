import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-between items-center p-4 bg-gray-200">
        {/* <div className="flex flex-row"> */}
          <div className="flex">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div>
            <a href="#">Acerca de nosotros</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Contacto</a>
          </div>
        {/* </div> */}
    </footer>
  )
}

export default Footer