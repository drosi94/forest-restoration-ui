import { motion, MotionProps } from 'framer-motion'
import { Button, ButtonProps } from '.'

export const AnimatedButton: React.FC<ButtonProps & MotionProps> = ({
  whileHover = { scale: 1.1 },
  whileTap = { scale: 0.9 },
  animate,
  ...buttonProps
}) => (
  <Button
    as={motion.button}
    whileTap={whileTap}
    whileHover={whileHover}
    animate={animate}
    {...buttonProps}
  />
)
