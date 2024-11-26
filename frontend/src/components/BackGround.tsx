import SalonBackground from "../assets/images/salon_main_img.jpg";

const BackGround = () => {
  return(
    <div>
        <img src={SalonBackground} className="w-full max-h-[600px] object-cover rounded-md"></img>
    </div>
  )
}

export default BackGround;