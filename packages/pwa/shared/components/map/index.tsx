import 'twin.macro'
import { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>

export default ({ center, zoom = 8, markers = [] }) => {
  const handleApiLoaded = (map, maps) => {
    console.log(map)
  }

  return (
    <div tw="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          mapId: 'abdf471ad31b6508',
        }}
        mapId={'abdf471ad31b6508'}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {markers.map((marker) => (
          <AnyReactComponent key={marker.id} lat={marker.lat} lng={marker.lng} text="My Marker" />
        ))}
      </GoogleMapReact>
    </div>
  )
}
