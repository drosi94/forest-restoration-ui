import React from 'react'
import tw from 'twin.macro'

export type LinearIndicatorProps = {
  color: 'primary' | 'secondary'
}

const styles = {
  '.shim': {
    position: 'relative',
    overflow: 'hidden',
  },
  '.shim::after': {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    transform: 'translateX(-100%)',
    backgroundImage:
      'linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1) 0,\n    rgba(255, 255, 255, 0.9) 50%,\n    rgba(255, 255, 255, 0.8) 100%\n  )',
    animation: 'shimmer 1.5s ease-out infinite',
    content: '""',
  },
  '@keyframes shimmer': { '100%': { transform: 'translateX(0%)', opacity: 0 } },
}

export const LinearIndicator: React.FC<LinearIndicatorProps> = ({ color }) => {
  return (
    <div
      css={[
        tw`relative w-full rounded-full`,
        color == 'primary' && tw`bg-primary-500`,
        color == 'secondary' && tw`bg-secondary-500`,
      ]}
    >
      <div css={styles}>
        <div className="shim" css={[tw`absolute top-0 h-2 rounded-full w-full`]}></div>
      </div>
    </div>
  )
}
