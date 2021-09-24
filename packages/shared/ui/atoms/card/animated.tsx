import { motion, MotionProps } from 'framer-motion'
import { BaseCard, BaseCardProps } from './base'

export const AnimatedCard: React.FC<BaseCardProps & MotionProps> = ({
  whileHover,
  whileTap,
  animate,
  ...cardProps
}) => (
  <motion.div whileTap={whileTap} whileHover={whileHover} animate={animate}>
    <BaseCard {...cardProps} />
  </motion.div>
)
