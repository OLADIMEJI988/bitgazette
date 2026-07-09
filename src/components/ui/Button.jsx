const VARIANTS = {
  primary: 'bg-ink text-white hover:bg-ink/90',
  brand: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-surface-border text-ink hover:bg-surface-alt',
  ghost: 'text-ink-soft hover:bg-surface-alt',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-md',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-150 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
