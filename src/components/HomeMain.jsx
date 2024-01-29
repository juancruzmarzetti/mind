import React from "react";

export default function HomeMain() {

    return (
        <>
            <main className="w-screen">
                <section>
                    <article className="font-dm text-white bg-black flex">
                        <div className="ml-[9%] w-[60%] mt-36 pb-[120px]">
                            <h1 className="text-[75px] leading-none">✱ <span className="text-[#DBB2FF]">Agencia creativa</span> de Growth Marketing</h1>
                            <h3 className="mt-12 text-[20px] w-[50%]">Soluciones digitales para tu negocio. Diseñamos estrategias de marketing innovadoras</h3>
                        </div>
                        <img className="absolute w-[22vw] ml-[78vw] mt-56" src="logomind.png" alt="Logo de la Agencia creativa de Growth Marketing"/>
                    </article>
                    <article>
                        <div className="flex ml-[9%] mr-[9%] mt-[2%] justify-between items-center">
                            <h3 className="font-notoserif font-bold text-[75px]">Our <span className="italic">work</span></h3>
                            <img src="arrowhomemain.png" alt="Flecha señalando abajo" className="w-[9%] mr-[-40px] mt-[10px]"/>
                        </div>
                        <div className="flex mt-[3%] gap-4 h-[482px] justify-center">
                            <div className="grid grid-cols-8 grid-rows-3 w-[421px] gap-4">
                                <div className="col-start-1 col-end-3 row-start-1 row-end-2 p-0">
                                    <img className="w-full h-full object-cover" src="gridimg1.png" alt="Perfil de Instagram de la cuenta @laescapadaclubdecampo."/>
                                </div>
                                <div className="col-start-3 col-end-9 row-start-1 row-end-2 p-0">
                                    <img className="w-full h-full object-cover" src="gridimg2.png" alt="Banner diseñado para Kena, dice: Suscribite y recibí nuestras últimas novedades y descuentos exclusivos. Sumate a nuestra comunidad de mujeres fuertes. Este texto seguido de un boton de Suscripción y una imagen mostrando dos mujeres riendo, con el logo de kena y los logos de las redes sociales en la que está presente Kena."/>
                                </div>
                                <div className="col-start-1 col-end-5 row-start-2 row-end-4 p-0">
                                    <img className="w-full h-full object-cover" src="gridimg3.png" alt="Imagen de un día de Coworking de nuestra empresa."/>
                                </div>
                                <div className="col-start-5 col-end-9 row-start-2 row-end-4 p-0">
                                    <img className="w-full h-full object-cover" src="gridimg4.png" alt="Fotografía de una mujer posando y muchos telefonos sacando fotos de ella."/>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 grid-rows-3 w-[421px] gap-4">
                                <div className="col-start-1 col-end-4 row-start-1 row-end-3">
                                    <img className="w-full h-full object-cover" src="gridimg5.png" alt="Imagen de un celular mostrando el perfil de Instagram de la cuenta @lukscakes, un cliente nuestro que lleva un emprendimiento de pastelería."/>
                                </div>
                                <div className="col-start-4 col-end-7 row-start-1 row-end-3">
                                    <img className="w-full h-full object-cover" src="gridimg6.png" alt="Fotografía de una producción hecha para Qilai, en un lanzamiento de una nueva colección de Camperas y Camperones."/>
                                </div>
                                <div className="col-start-1 col-end-5 row-start-3 row-end-4">
                                    <img className="w-full h-full object-cover" src="gridimg7.png" alt="Fotografía de un Branding hecho para Lukscakes, marca de Pastelería. Opciones de logos, paletas de colores, etc."/>
                                </div>
                                <div className="col-start-5 col-end-7 row-start-3 row-end-4">
                                    <img className="w-full h-full object-cover" src="gridimg8.png" alt="Imagen de una publicación de @tiempodesabores, señalando el Copywriting."/>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 grid-rows-3 w-[421px] gap-4">
                                <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                                    <img className="w-full h-full object-cover" src="gridimg9.png" alt="Fotografía de un trago de El Jardín Resto & Bar."/>
                                </div>
                                <div className="col-start-3 col-end-7 row-start-1 row-end-2">
                                    <img className="w-full h-full object-cover" src="gridimg10.png" alt="Mock-up de un celular con ejemplos de stories de instagram de @talar_maderas."/>
                                </div>
                                <div className="col-start-1 col-end-4 row-start-2 row-end-4">
                                    <img className="w-full h-full object-cover" src="gridimg11.png" alt="Mock-up que muestra el E-Book Marketing de contenidos, el arte del marketing, todo lo que debes saber, de Dobleuv Design."/>
                                </div>
                                <div className="col-start-4 col-end-7 row-start-2 row-end-4">
                                    <img className="w-full h-full object-cover" src="gridimg12.png" alt="Fotografía de una producción de fotos y videos hecha para la marca Liva."/>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                        
                    </article>
                </section>
            </main>
        </>
    );
  }