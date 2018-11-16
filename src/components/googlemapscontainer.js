import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

export class GoogleMapsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: false
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow:false,
                activeMarker: null
            });
        }
    }

    render() {
        const containerStyle = {
            position: 'relative',
            height: '400px',
            width: '80vw',
            margin: '0 auto'
        }

        const mapStyle = {
            position: 'relative',
            margin: '0 auto',
            height: '300px',
        }

        return (
            <div style={containerStyle}>
                <Map 
                    style = { mapStyle }
                    google={ this.props.google } 
                    onClick = { this.onMapClick }
                    zoom = { 14 }
                    initialCenter = {{ lat: 45.6561536, lng: -122.6663053 }}
                >
                    <Marker 
                        onClick = { this.onMarkerClick }
                        title = { "Paul's Motor Inc" }
                        position = {{ lat: 45.6561536, lng: -122.6663053 }}
                        name = { "Paul's Motor Inc" }
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.API_KEY)
})(GoogleMapsContainer)