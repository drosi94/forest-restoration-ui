import { Typography } from '../../atoms'

export const Description = ({ children, ...rest }) => (
  <Typography {...rest} as="p">
    {children}
  </Typography>
)
