import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PromotionalCardProps {
  title: string
  description: string
  buttonText: string
  onButtonClick?: () => void
  className?: string
  bgColor?: string
  textColor?: string
  buttonVariant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
}

export function PromotionalCard({
  title,
  description,
  buttonText,
  onButtonClick,
  className,
  bgColor = '#1e293b',
  textColor = 'white',
  buttonVariant = 'default'
}: PromotionalCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden border-0",
        className
      )}
      style={{ 
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <CardContent className="flex flex-col items-start justify-between space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        
        <Button 
          variant={buttonVariant} 
          onClick={onButtonClick}
          className="mt-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
} 