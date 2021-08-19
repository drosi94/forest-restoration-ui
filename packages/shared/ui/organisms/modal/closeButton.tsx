import tw from 'twin.macro'
import { XIcon } from '@heroicons/react/outline'

type CloseButtonProps = {
  onClick: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick = () => {} }) => {
  return (
    <div
      role="button"
      css={[tw`float-right p-2 cursor-pointer hover:opacity-70 active:text-gray-400`]}
      aria-label="Close Modal"
    >
      <XIcon onClick={onClick} width={24} />
    </div>
  )
}
