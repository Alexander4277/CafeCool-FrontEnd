import landingImage from '../assets/cafeee.jpg'

export default function HomePage() {
  return (
    <div className="flex flex-col gab-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gab-5 text-center-mt-16">

            <h1 className="text-5xl font bold tracking-tight text-white-600">
                Disfruta y conoce nuestras bebidas y alimentos de temporada
            </h1>
             <span className="text-x1">
                Consulta precios aqui mismo
             </span>
             <div className='grid md:grid-cols-2 gap-5'>
                <img src={landingImage}/>
                <div className='flex flex-col items center
                                justify-center gap-4 text center'>
                    <span className='font-bold text-3xl tracking-tighter'>
                        Pide aqui tu cafe
                    </span>
                </div>
                

             </div>
        </div>
    </div>
  )
}
