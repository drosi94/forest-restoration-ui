import { useRef } from 'react'
import { MapContainer, useMapEvent, TileLayer, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { useThemeProvider } from 'shared/providers/theme'

export default () => {
  const { isDarkMode } = useThemeProvider()
  const animateRef = useRef(true)

  return (
    <MapContainer
      center={[38.0602957, 19.9911706]}
      zoom={6}
      scrollWheelZoom
      style={{ height: 600, width: '100%' }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap" checked={!isDarkMode}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="NasaMap" checked={isDarkMode}>
          <TileLayer
            attribution="&copy; NASA Blue Marble, image service by OpenGeo"
            url=" https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            maxNativeZoom={8}
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      <SetViewOnClick animateRef={animateRef} />
    </MapContainer>
  )
}

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    })
  })

  return null
}
