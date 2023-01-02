import {useState} from 'react'
import { Button } from '../components/Button'
import { Flyer } from '../components/Flyer'
import html2canvas from 'html2canvas'


export function HappyNewYear(){

    const [name, setName] = useState<string>('Seu nome')
    
    async function generateImage():Promise<string>{
        const canvas =  await html2canvas(document.querySelector('.flyer')!)
        const base64 =  canvas.toDataURL('image/png')

        return base64
    }

    async function downloadImage(){
        try{
          const file =  await generateImage()
          const downloadLink =  document.createElement('a')
          downloadLink.href = file
          downloadLink.download = 'Feliz2023'
          downloadLink.click()
          
        }catch(err){
          console.log(err)
        }
      }


      async function shareImage(){

        try{
    
          const response =  await fetch(await generateImage())
          const blob =  await response.blob()
          const file =  new File([blob],'share.png',{type:blob.type})
          await navigator.share({
              title:'Feliz 2023!',
              text:`Feliz 2023! gere essa mensagem com seu nome em : ${window.location.href}`,
              files:[file]
            })
        }catch(err){
          console.log(err)
        }
      }
    


    return(
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-slate-900">
            <div className='xl:w-[30vw] w-[90vw] mb-4 flex flex-row items-center justify-evenly'>
                <input
                    className='w-[40vw] text-[#fff] p-2 rounded-full text-center bg-slate-600'
                    type="text"
                    placeholder='Digite seu nome'
                    onChange={e => setName(e.target.value)}
                />
                <Button
                    onClick={downloadImage}
                    title='Baixar'
                />
                <Button
                    onClick={shareImage}
                    title='Compartilhar'
                />

            </div>
                <Flyer name={name}/>

        </div>
    )
}