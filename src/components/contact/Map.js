import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../../assets/Marker'

const Maps = (props) => {
    const getMapOptions = (maps) => {
        return {
            clickableIcons: true,
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'on' }],
                },
            ],
        }
    }

    const [center, setCenter] = useState({
        lat: 47.49864470038967,
        lng: 19.05053004728285,
    })
    const [zoom, setZoom] = useState(15)
    return (
        <div
            style={{
                height: '50vh',
                width: '70%',
                minHeight: '300px',
                maxWidth: '1000px',
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: '************************',
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <Marker
                    lat={47.49864470038967}
                    lng={19.05053004728285}
                    name="My Marker"
                    color="Gray"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Maps
