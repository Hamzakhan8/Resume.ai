interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive';
}

export function Alert({ children, className = '', variant = 'default' }: AlertProps) {
  return (
    <div className={`rounded-lg border p-4 ${variant === 'destructive' ? 'border-red-500 bg-red-50' : 'border-gray-200'} ${className}`}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
} 