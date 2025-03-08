
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  valueClassName?: string;
}

const DataCard = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
  valueClassName,
}: DataCardProps) => {
  return (
    <div className={cn("glass-card p-6 transition-all duration-300", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="flex items-end">
        <div className={cn("text-2xl md:text-3xl font-bold", valueClassName)}>
          {value}
        </div>
        {trend && (
          <div
            className={cn(
              "ml-2 text-sm font-medium flex items-center",
              trend.isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            <span
              className={cn(
                "mr-1",
                trend.isPositive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.isPositive ? "↑" : "↓"}
            </span>
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default DataCard;
