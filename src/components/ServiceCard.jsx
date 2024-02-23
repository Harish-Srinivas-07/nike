const ServiceCard = ({imgUrl,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
        <div className="bg-coral-red rounded-full flex justify-center items-center w-11 h-11">
            <img src={imgUrl} alt={label} width={24} height={24}/>
        </div>
        <h3 className="text-3xl font-palanquin font-bold leading-normal mt-5">{label}</h3>
        <p className="font-montserrat text-slate-gray mt-3 break-words text-lg leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard