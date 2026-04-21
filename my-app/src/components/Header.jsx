import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
        <div className="flex flex-row justify-between items-center">
            <div>marca</div>
            <div>Jabones</div>
            <div>Skin Care</div>
            <div>Exfoliantes</div> 
            <div>Buscador</div>
            <div className="flex items-center">
                <FaCartShopping />
            </div>
        </div>
    </header>
  )
}

export default Header