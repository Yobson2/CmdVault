

interface DonutChartProps {
  data: {
    value: number
    color: string
    label: string
  }[]
  size?: number
  thickness?: number
  className?: string
}

export function DonutChart({ 
  data, 
  size = 160, 
  thickness = 20,
  className
}: DonutChartProps) {
  const radius = size / 2
  const innerRadius = radius - thickness
  const centerX = radius
  const centerY = radius
  const sum = data.reduce((acc, item) => acc + item.value, 0)
  
  let startAngle = 0
  
  return (
    <div className={className} style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((item, index) => {
          const percentage = item.value / sum
          const endAngle = startAngle + percentage * Math.PI * 2
          
          // Calculate path
          const x1 = centerX + innerRadius * Math.cos(startAngle)
          const y1 = centerY + innerRadius * Math.sin(startAngle)
          const x2 = centerX + radius * Math.cos(startAngle)
          const y2 = centerY + radius * Math.sin(startAngle)
          const x3 = centerX + radius * Math.cos(endAngle)
          const y3 = centerY + radius * Math.sin(endAngle)
          const x4 = centerX + innerRadius * Math.cos(endAngle)
          const y4 = centerY + innerRadius * Math.sin(endAngle)
          
          // Path flags
          const largeArcFlag = percentage > 0.5 ? 1 : 0
          
          // Generate path
          const path = [
            `M ${x1} ${y1}`,
            `L ${x2} ${y2}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
            `L ${x4} ${y4}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
            'Z'
          ].join(' ')
          
          const result = (
            <path
              key={index}
              d={path}
              fill={item.color}
            />
          )
          
          startAngle = endAngle
          return result
        })}
        
        {/* Center circle for text */}
        <circle cx={centerX} cy={centerY} r={innerRadius - 4} fill="white" />
      </svg>
      
      {/* Value in center */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <div className="text-2xl font-bold text-gray-900">
          {sum.toLocaleString()}
        </div>
        <div className="text-xs text-gray-500">TOTAL</div>
      </div>
      
      {/* Legend below chart */}
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 