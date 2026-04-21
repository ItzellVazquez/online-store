import bannermain from "../assets/bannermain.jpeg"
const Banner = () => {
  return (
    <div className="banner">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <div className="text-sm">Conoce nuestros productos para spa</div>
                <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded">Ver productos</button>
            </div>
            <div className="flex flex-col">
                <img src={bannermain} alt="Banner Principal" />
            </div>
        </div>
    </div>
  )
}

export default Banner