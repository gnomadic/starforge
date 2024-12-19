import React, { useState } from 'react'
import { Switch } from '@/components/ui/switch'

interface Resource {
  name: string
  balance: number
  rate: number
  active: boolean
}

const initialResources: Resource[] = [
  { name: "Population", balance: 1000, rate: 0.1, active: true },
  { name: "Materials", balance: 500, rate: 1, active: true },
  { name: "Energy", balance: 200, rate: 0.5, active: true },
  { name: "Soldiers", balance: 50, rate: 0.05, active: false },
  { name: "Medics", balance: 20, rate: 0.02, active: false },
  { name: "Scientists", balance: 10, rate: 0.01, active: false },
]

const ResourceItem: React.FC<{ resource: Resource; onToggle: () => void }> = ({ resource, onToggle }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
    <div>
      <h3 className="text-lg font-semibold">{resource.name}</h3>
      <p className="text-sm text-gray-600">
        Balance: {resource.balance.toFixed(2)}
        <span className='text-red'> + 100</span>
      </p>
      <p className="text-sm text-gray-600">Rate: {resource.rate.toFixed(2)}/s</p>
    </div>
    <Switch
      checked={resource.active}
      onCheckedChange={onToggle}
      aria-label={`Toggle ${resource.name} generation`}
    />
  </div>
)

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>(initialResources)

  const handleToggle = (index: number) => {
    setResources(prevResources => 
      prevResources.map((resource, i) => 
        i === index ? { ...resource, active: !resource.active } : resource
      )
    )
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Resource Management</h2>
      <div className="grid gap-4 grid-cols-1">
        {resources.map((resource, index) => (
          <ResourceItem 
            key={resource.name} 
            resource={resource} 
            onToggle={() => handleToggle(index)} 
          />
        ))}
      </div>
    </div>
  )
}

