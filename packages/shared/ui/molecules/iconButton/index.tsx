import 'twin.macro'
import { ButtonProps, Button } from '../../atoms/button'

export type IconButtonProps = ButtonProps & {
  Icon: React.ElementType<any>
  position?: 'left' | 'right'
}

export const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  position = 'left',
  children,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps}>
      <span tw="flex items-center gap-1">
        {position === 'left' && <Icon />}
        {children}
        {position === 'right' && <Icon />}
      </span>
    </Button>
  )
}
