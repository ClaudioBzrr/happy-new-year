interface FlyerProps{
    name:string
}

export function Flyer({name}:FlyerProps){
    return(
        <div className="flyer shadow-black bg-[url(/src/assets/images/fireworks.jpg)] object-contain bg-no-repeat bg-cover flex flex-col items-center justify-evenly xl:w-[30vw] xl:h-[85vh] w-[90vw] h-[80vh]">
            <div className="w-[95%] h-[30%] flex flex-col items-center justify-center bg-black rounded-xl bg-opacity-70 text-center text-3xl font-bold text-[#fff] font-shadows-into-light">
                <span>Desejo a todos muita paz, saúde, prosperidade e sucesso.</span>
            </div>
            <div className="w-[95%] h-[20%] flex flex-col items-center justify-center bg-black rounded-3xl bg-opacity-70 text-center text-5xl text-[#fff] font-extrabold font-shadows-into-light ">
                <span>Feliz 2023 !</span>
            </div>
            <div className="w-full flex flex-row justify-end">
                <div className="flex flex-col justify-center items-cente rounded-3xl bg-opacity-70 mr-8 text-right font-semibold text-xl text-[#fff]">
                    <span className="text-[#fff] font-shadows-into-light">
                        Com carinho, {name}
                    </span>
                </div>
            </div>
        </div>
    )
}