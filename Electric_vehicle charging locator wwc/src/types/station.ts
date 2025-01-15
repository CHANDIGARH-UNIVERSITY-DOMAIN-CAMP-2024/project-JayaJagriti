export interface ChargingStation {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  available: number;
  total: number;
  rating: number;
  pricePerKwh: number;
  connectorTypes: string[];
  amenities: string[];
}