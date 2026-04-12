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
        toast.success(`Discord username copied to clipboard!`)
      })
      .catch((err) => {
        console.error('Failed to copy Discord username:', err)
      })
  }

  return (
    <div className="flex w-[240px] flex-col items-center rounded-[20px] bg-bggray py-6 px-4 md:w-[280px]">
      {/* Photo */}
      <img
        src={props.pic}
        className="h-[180px] w-[180px] rounded-[16px] object-cover md:h-[220px] md:w-[220px]"
        alt={props.name}
      />

      {/* Name */}
      <h2 className="mt-4 text-center text-lg font-semibold text-black md:text-xl">
        {props.name}
      </h2>

      {/* Role */}
      <p className="mt-1 text-center text-sm font-medium text-logopurple md:text-base">
        {props.position}
      </p>

      {/* Contact icons */}
      <div className="mt-4 flex flex-row justify-center gap-6">
        <button
          onClick={handleDiscordClick}
          title="Copy Discord username"
        >
          <img
            src="./icons/discord_icon_officer_M.svg"
            className="h-[32px] w-[32px] hover:opacity-70 transition"
          />
        </button>
        {props.linkedin && (
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src="./icons/linkedin_icon_officer_M.svg"
              className="h-[32px] w-[32px] hover:opacity-70 transition"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default OfficerCard