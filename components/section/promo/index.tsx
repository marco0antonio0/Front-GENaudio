import { Image } from "@heroui/react";

export default function SectionPromo(){
    return(<>
                <div className="w-[50%] mdi:w-[100%]">
                <h1 className="m-auto mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Dê vida aos seus textos</h1>
                <p className="text-lg text-justify">
                Desde o início, nossa missão tem sido simplificar a criação de áudios personalizados, tornando essa tecnologia acessível para todos. 
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-row items-center">
                      <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_check.png')] bg-cover bg-center"></div>
                        <div className="flex flex-col ml-3">
                          <h1 className="text-lg text-justify font-medium">
                            Lorem ipsum dolor sit amet.
                          </h1>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_speed.png')] bg-cover bg-center"></div>
                        <div className="flex flex-col ml-3">
                          <h1 className="text-lg text-justify font-medium">
                            Lorem ipsum dolor sit amet.
                          </h1>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_audio.png')] bg-cover bg-center"></div>
                        <div className="flex flex-col ml-3">
                          <h1 className="text-lg text-justify font-medium">
                            Lorem ipsum dolor sit amet.
                          </h1>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="m-auto">
                <Image
                  isBlurred
                  alt="HeroUI Fruit Image with Zoom"
                  src="/promo/Work_7.jpg"
                  className="w-auto h-[350px] m-auto mr-0 lgi:h-[450px]"
                />
              </div>
    </>)
  }
  
  
  
  
  
  
  