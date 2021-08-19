import { Typography } from '../../atoms'

export const Title = ({ children, ...rest }) => (
  <Typography {...rest} as="h2">
    {children}
  </Typography>
)
