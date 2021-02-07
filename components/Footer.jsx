import Config from '../config';

export default function Footer() {
    return <footer className="bg-blue-300 text-white font-semibold h-40 md:h-28 text-2xl flex flex-col md:flex-row place-content-start justify-between  py-2   md:px-6  items-center ">
        <div className="w-40  flex justify-between">
        <a href={'https://www.instagram.com/' + Config.instagram} target="_blank">
        <i class="fab fa-instagram "></i>
                    </a>
                    <a href={'https://www.twitter.com/' + Config.twitter} target="_blank">
                    <i class="fab fa-twitter"></i>
                    </a>
                    <a href={Config.spotify} target="_blank">
                    <i class="fab fa-spotify"></i>                    </a>
                    <a href={Config.google} target="_blank" >
                        <i class="fab fa-google"></i>                  </a>
        </div>
        <div>
        &#169; 2021
        </div>
        <div className="text-base">
            <h1 >Want to contribute?</h1>
            <h1 className="font-thin">Sourced on <a href={Config.github} className=" text-gray-600">Github</a></h1>
        </div>
    </footer>;
}
