import { div } from "three/examples/jsm/nodes/Nodes.js";
import DevImage1 from "../../assets/webdev1.png";
import DevImage2 from "../../assets/webdev2.png";
import { Link } from "react-router-dom";

export default function SectionFife(params) {
  return (
    <div className="w-full mt-[150px] container justify-center items-center flex">
      <div className="justify-center mx-auto items-center">
        <div className="lg:flex block">
          <div className="flex">
            <div>
              <div
                data-aos="fade-down"
                className="sm:w-[220px] xl:w-[270px] w-[130] min-[400px]:w-[170px] sm:h-[330px] xl:h-[400px] h-[240px] min-[400px]:h-[260px] rounded-xl shadow-lg shadow-gray-700 !overflow-hidden"
              >
                <img className="h-full w-full " src={DevImage1} alt="" />
              </div>
              <h1
                data-aos="fade-up"
                className="flex font-[700] text-[16px] sm:text-[20px] items-center gap-2 ColorGreen shadowed-textWhite"
              >
                <span className="text-[70px] font-[800] text-white">5</span>
                yillik tajribaga ega
                <br />
                ustozlar
              </h1>
            </div>
            <div
              data-aos="fade-up"
              className="sm:ml-[40px] ml-[20px] mt-[75px] sm:w-[220px] xl:w-[270px] w-[130] min-[400px]:w-[170px]  sm:h-[330px] xl:h-[400px] h-[240px] min-[400px]:h-[260px]  rounded-xl shadow-lg shadow-gray-700 overflow-hidden"
            >
              <img className="w-full h-full" src={DevImage2} alt="" />
            </div>
          </div>
          <div className="xl:ml-[200px] max-w-[600px] lg:ml-[100px] ml-0 mt-[50px] lg:justify-start mx-auto justify-center items-center">
            <h1
              data-aos="fade-left"
              className="font-[800] text-[50px] text-center lg:text-start"
            >
              Biz haqimizda
            </h1>
            <p
              data-aos="fade-left"
              className="min-[1080px]:max-w-[600px] max-w-[400px] justify-center items-center mx-auto mt-3 text-center lg:text-start"
            >
              IT center Beshariq filiali 2021-yil Beshariq shahrida tashkil
              etilgan. Kompaniyaning falsafasi O'zbekistonning IT sohasidagi
              xalqaro standartlarga javob beradigan "Dasturchi yoshlarni"
              shakllantirish, yosh dasturchilarga o'zlari ustida ishlash va shu
              bilan birga rasmiy ravishda ishga joylashish imkoniyatini
              yaratish, kompaniyani IT jahon sahnasida taniqli joyga olib
              borishdan iborat.
            </p>
            <h2
              data-aos="fade-left"
              className="font-[700] text-[20px] mt-3 lg:mx-0 lg:text-start mx-auto text-center"
            >
              Kurslar :
            </h2>
            <p
              data-aos="fade-left"
              className="min-[1080px]:max-w-[600px] max-w-[400px] mt-1 justify-center items-center mx-auto text-center lg:text-start"
            >
              <ul className="text-start lg:mx-0 mx-auto ml-5">
                <li>• Kampyuter Savodxonligi</li>
                <li>• Web Dasturlash</li>
                <li>• Android ilovalar</li>
              </ul>
              Qo'lgan qo'shimcha ma'lumotlarni Telegram botimizdan yoki ushbu
              web sahifamizdan olishingiz mumkin...{" "}
              <Link to={"about/"} className="ColorGreen">
                Batafsil
              </Link>
            </p>
            <div className="flex justify-center lg:justify-start mx-auto items-center gap-4 mt-7">
              <Link
                to={"https://t.me/itcbeshariqbot_bot"}
                data-aos="fade-up"
                className="btn rounded-md Durations border-white border-2 text-sm sm:text-md md:text-lg w-[100px] md:w-[130px]"
              >
                Add course
              </Link>
              <Link
                to={"tel:+998998375214"}
                data-aos="fade-left"
                className="btn transition-all Durations BgGreen shadowed-text rounded-md text-sm sm:text-md md:text-xl w-[100px] md:w-[130px]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
