import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Card, CardHeader } from "./ui/card";

export interface ICountriesMap {
  country: string;
  lat: number;
  long: number;
  cases: number;
  recovered: number;
  deaths: number;
}

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [15, 25], // size of the icon
  iconAnchor: [8, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [25, 25], // size of the shadow
});

// Set the default marker icon for Leaflet
L.Marker.prototype.options.icon = DefaultIcon;

function WorldMap({ mapData }: { mapData: ICountriesMap[] }) {
  return (
    <Card className="p-5 mt-5">
      <CardHeader className="pl-1">
        <h2 className="text-2xl sm:text-3xl flex-1 tracking-tight font-bold">
          COVID-19 Cases by Country
        </h2>
      </CardHeader>
      <MapContainer
        minZoom={2}
        center={[20.0, 0.0]} // Center of the map (you can adjust this)
        zoom={1} // Adjust zoom level
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {mapData.map((country, index) => (
          <Marker key={index} position={[country.lat, country.long]}>
            <Tooltip>
              <div>
                <h3 className="font-bold">{country.country}</h3>
                <p>
                  <strong>Active Cases:</strong> {country.cases}
                </p>
                <p>
                  <strong>Recovered:</strong> {country.recovered}
                </p>
                <p>
                  <strong>Deaths:</strong> {country.deaths}
                </p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </Card>
  );
}

export default WorldMap;
