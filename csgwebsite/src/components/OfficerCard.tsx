import toast from 'react-hot-toast'

interface CardProps {
  name: string
  position: string
  pic: string
  discord: string
  linkedin: string
}

const OfficerCard = (props: CardProps) => {
  const handleDiscordClick = () => {
    navigator.clipboard
      .writeText(props.discord)
      .then(() => {
        // alert(`Copied Discord username: ${props.discord}`)
        toast.success(`Discord username copied to clipboard!`)
      })
      .catch((err) => {
        console.error('Failed to copy Discord username:', err)
      })
  }

  return (
    <>
      {/* Mobile/Desktop Variant */}
      <div className="flex h-[335px] w-[269px] flex-col self-center rounded-[20px] bg-bggray md:hidden ">
        {/* Name */}
        <div className="text-center">
          <h1 className="inline-block text-2xl text-logopurple">{'>'}</h1>{' '}
          <h1 className="inline-block justify-center pt-2 font-firacode text-xl">
            {props.name}
          </h1>
        </div>

        {/* Image */}
        <img
          src={props.pic}
          className="mx-auto mt-4 h-[177px] w-[174px] rounded-[20px] object-cover"
          alt={'Officer_Pics_' + ' ' + props.position + ' ' + props.name}
        />
        {/* Title */}
        <h1 className="pt-2 text-center font-medium">{props.position}</h1>
        {/* Contact Information */}
        <div className="flex flex-row justify-center gap-8 pl-5 pt-4">
          {/* Discord */}
          <button onClick={handleDiscordClick}>
            <img
              src="./icons/discord_icon_officer_M.svg"
              className="mr-4 h-[35px] w-[35px]"
            />
          </button>
          {/* LinkedIn */}
          <a href={props.linkedin}>
            <img
              src="./icons/linkedin_icon_officer_M.svg"
              className="mr-4 h-[35px] w-[35px]"
            />
          </a>
        </div>
      </div>

      {/* Desktop Variant */}
      <div className="hidden h-[587px] w-[437px] flex-col self-center rounded-[20px] bg-bggray md:flex ">
        {/* Name */}
        <div className="pt-5 text-center">
          <h1 className="inline-block text-2xl text-logopurple">{'>'}</h1>{' '}
          <h1 className="inline-block justify-center pt-2 font-firacode text-3xl">
            {props.name}
          </h1>
        </div>

        {/* Image */}
        <img
          src={props.pic}
          className="mx-auto mt-4 h-[300px] w-[295px] rounded-[20px] object-cover"
          alt={'OfficerPics_' + ' ' + props.position + ' ' + props.name}
        />
        {/* Title */}
        <h1 className="pt-2 text-center text-2xl font-medium">
          {props.position}
        </h1>
        {/* Contact Information */}
        <div className="flex flex-row justify-center gap-8 pl-5 pt-12">
          {/* Discord */}
          <button onClick={handleDiscordClick}>
            <img
              src="./icons/discord_icon_officer_D.svg"
              className="mr-4 h-[70px] w-[55px]"
            />
          </button>
          {/* LinkedIn */}
          <a href={props.linkedin}>
            <img
              src="./icons/linkedin_icon_officer_D.svg"
              className="mr-4 h-[70px] w-[55px]"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default OfficerCard
