import React from "react";

export default function NavBar() {

    return (
        <>
            <header className="w-[100%] flex items-center bg-black h-[10vh] justify-between">                
                <div className="bg-white h-[1%] w-[75%]"></div>                 
                <nav className="w-[20%] mr-[3%]">
                    <ul className="list-none flex justify-around p-0 font-dm text-white font-normal text-base [&>li]:mr-[2%] [&>li]:ml-0">
                        <li>inicio</li>
                        <li>servicios</li>
                        <li>proyectos</li>
                        <li>clientes</li>
                        <li>contacto</li>
                    </ul>
                </nav>
            </header>
        </>
    );
  }