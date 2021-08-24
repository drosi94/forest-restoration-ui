import tw from 'twin.macro'
import { XIcon } from '@heroicons/react/outline'

type CloseButtonProps = {
  onClick: () => void
  width?: number
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick = () => {}, width = 24 }) => {
  return (
    <div
      role="button"
      css={[tw`float-right cursor-pointer hover:opacity-70 text-textPrimary active:text-gray-400`]}
      aria-label="Close Modal"
    >
      <XIcon onClick={onClick} width={width} />
    </div>
  )
}
