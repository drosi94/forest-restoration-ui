import tw from 'twin.macro'
import { XIcon } from '@heroicons/react/outline'

type CloseButtonProps = {
  onClick: () => void
  width?: number
  buttonRef?: React.RefObject<any>
  label?: string
  preventPropagation?: boolean
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick = () => {},
  buttonRef,
  width = 24,
  label = 'Close',
  preventPropagation,
}) => {
  return (
    <button
      ref={buttonRef}
      onClick={(e) => {
        preventPropagation && e.stopPropagation()
        onClick()
      }}
      css={[
        tw`float-right cursor-pointer hover:opacity-70 text-textPrimary active:text-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`,
      ]}
      aria-label={label}
    >
      <XIcon width={width} />
    </button>
  )
}
