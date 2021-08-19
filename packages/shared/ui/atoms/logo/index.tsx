export type LogoProps = {
  height?: number
  width?: number
  size?: 'custom' | 'large' | 'medium' | 'small'
  CustomImageComponent?: React.ComponentType<any>
}

const sizeStyling = ({ width, height }) => ({
  custom: { width: `${width}px`, height: `${height}px` },
  big: { width: `256px`, height: `256x` },
  medium: { width: `192px`, height: `192px` },
  small: { width: `86px`, height: `86px` },
})

export const Logo: React.FC<LogoProps> = ({
  height,
  width,
  size = 'medium',
  CustomImageComponent,
}) => (
  <div>
    {CustomImageComponent ? (
      CustomImageComponent
    ) : (
      <img
        style={sizeStyling({ height, width })[size]}
        src={require('./logo.png')}
        alt="Forest Restoration logo"
      />
    )}
  </div>
)
