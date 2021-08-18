export type LogoProps = {
  height?: number
  width?: number
  variant?: 'custom' | 'big' | 'medium' | 'small'
  CustomImageComponent?: React.ComponentType<any>
}

const variantStyling = ({ width, height }) => ({
  custom: { width: `${width}px`, height: `${height}px` },
  big: { width: `256px`, height: `256x` },
  medium: { width: `192px`, height: `192px` },
  small: { width: `86px`, height: `86px` },
})

export const Logo: React.FC<LogoProps> = ({
  height,
  width,
  variant = 'medium',
  CustomImageComponent,
}) => (
  <div>
    {CustomImageComponent ? (
      CustomImageComponent
    ) : (
      <img
        style={variantStyling({ height, width })[variant]}
        src={require('./logo.png')}
        alt="Forest Restoration logo"
      />
    )}
  </div>
)
