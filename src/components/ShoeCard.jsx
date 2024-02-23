const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImage}) => {

  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-cover bg-cover object-contain sm:w-40 sm:h-40 max-sm:p-4">
        <img 
        src={imgUrl.thumbnail}
        alt="shoe collections"
        width={127}
        height={103}/>
      </div>
    </div>
  )
}

export default ShoeCard