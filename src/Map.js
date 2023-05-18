import { Card} from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
});

function Map(props){
    return(
<Card style={{ display: props.displayMap, marginBottom: '10px', marginTop: '0px', height: '40%', width: '40%' }}>
{props.displayCity.lat && props.displayCity.lon ? (
    <MapContainer
        center={[props.displayCity.lat, props.displayCity.lon]}
        zoom={12}
        style={{ display: props.displayMap, height: "500px", width: "600px" }} scrollWheelZoom={false}
    >
        <TileLayer
            url="https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=pk.e65687e540287de5bf7920f2c5a4d514"
            attribution='&copy; <a href="https://www.locationiq.com/">LocationIQ</a> contributors'
        />
        <Marker
            position={[props.displayCity.lat, props.displayCity.lon]}>
            <Popup> {[props.displayCity.display_name]}</Popup>
        </Marker>
    </MapContainer>
) : null}

</Card>
    )
}




export default Map;