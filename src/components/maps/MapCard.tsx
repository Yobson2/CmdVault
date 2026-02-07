import { IconMapPin, IconNavigationFilled } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

interface MapCardProps {
  className?: string
  locations?: Array<{
    id: string
    lat: number
    lng: number
    color?: string
  }>
  centerLat?: number
  centerLng?: number
  zoom?: number
}

export function MapCard({ 
  className,
  locations = [],
  // centerLat = 40.712776,
  // centerLng = -74.005974,
  // zoom = 12
}: MapCardProps) {
  // Dans un environnement réel, nous utiliserions ici une bibliothèque comme Leaflet ou Google Maps
  // Pour cet exemple, nous simulons une carte avec une image statique et des marqueurs placés

  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-white", className)}>
      {/* Simulated Map Background - would be replaced with actual map library */}
      <div 
        className="h-full w-full bg-gray-100"
        style={{
          backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/0,0,1/600x400?access_token=pk.placeholder")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px'
        }}
      >
        {/* Map Navigation Controls */}
        <div className="absolute right-2 top-2 z-10 flex flex-col gap-1">
          <button className="flex h-6 w-6 items-center justify-center rounded bg-white text-gray-700 shadow-md">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="flex h-6 w-6 items-center justify-center rounded bg-white text-gray-700 shadow-md">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>

        {/* Location Pins */}
        {locations.map((location) => (
          <div 
            key={location.id}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              // Position markers based on latitude/longitude
              // In a real implementation, these would be projected correctly
              left: `${30 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
          >
            <div className="flex flex-col items-center">
              <IconMapPin 
                size={24} 
                className="h-6 w-6 text-primary-500 drop-shadow-md" 
                fill={location.color || "#0ea5e9"} 
                fillOpacity={0.2}
              />
              <div 
                className="absolute bottom-0 h-2 w-2 rounded-full"
                style={{ backgroundColor: location.color || "#0ea5e9" }}
              />
            </div>
          </div>
        ))}

        {/* Current Location Pin */}
        <div 
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '50%',
            top: '50%',
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg">
              <IconNavigationFilled size={14} />
            </div>
            <div className="mt-1 rounded-md bg-white px-2 py-1 text-xs font-medium shadow-md">
              Your Location
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 