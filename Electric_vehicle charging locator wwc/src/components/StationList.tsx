import React from 'react';
import { ChargingStation } from '../types/station';
import { Battery, Zap, MapPin, Star } from 'lucide-react';

interface StationListProps {
  stations: ChargingStation[];
  onStationSelect: (station: ChargingStation) => void;
  selectedStation?: ChargingStation;
}

const StationList: React.FC<StationListProps> = ({
  stations,
  onStationSelect,
  selectedStation,
}) => {
  return (
    <div className="space-y-4">
      {stations.map((station) => (
        <div
          key={station.id}
          className={`p-4 rounded-lg shadow-md cursor-pointer transition-all ${
            selectedStation?.id === station.id
              ? 'bg-blue-50 border-2 border-blue-500'
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => onStationSelect(station)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{station.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <p className="text-sm">{station.address}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{station.rating}</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Battery className="w-4 h-4 mr-1 text-green-500" />
                <span className="text-sm">
                  {station.available}/{station.total} available
                </span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-blue-500" />
                <span className="text-sm">${station.pricePerKwh}/kWh</span>
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {station.connectorTypes.map((type) => (
              <span
                key={type}
                className="px-2 py-1 text-xs bg-gray-100 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StationList;