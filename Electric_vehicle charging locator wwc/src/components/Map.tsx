import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ChargingStation } from '../types/station';

interface MapProps {
  stations: ChargingStation[];
  onStationSelect: (station: ChargingStation) => void;
}

const Map: React.FC<MapProps> = ({ stations, onStationSelect }) => {
  const customIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={13}
      className="w-[800px] h-[600px] rounded-lg shadow-lg position- fixed"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.location.lat, station.location.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => onStationSelect(station),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{station.name}</h3>
              <p className="text-sm text-gray-600">{station.address}</p>
              <p className="text-sm mt-1">
                Available: {station.available}/{station.total}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;