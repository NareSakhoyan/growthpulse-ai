import { cn } from '@/lib/utils';

/**
 * Renders the outer card container used for grouped content blocks.
 *
 * @param props - The card container props.
 * @returns `Card` returns a bordered surface wrapper for grouped content.
 */
export function Card({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border/70 bg-card text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders the padded header region for a card.
 *
 * @param props - The card header props.
 * @returns `CardHeader` returns a padded card header container.
 */
export function CardHeader({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element {
  return <div className={cn('flex flex-col gap-2 p-6', className)} {...props} />;
}

/**
 * Renders the heading text inside a card header.
 *
 * @param props - The card title props.
 * @returns `CardTitle` returns a styled card title element.
 */
export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>): React.JSX.Element {
  return <h3 className={cn('text-lg font-semibold tracking-tight', className)} {...props} />;
}

/**
 * Renders supporting description text inside a card header.
 *
 * @param props - The card description props.
 * @returns `CardDescription` returns muted supporting text for the card.
 */
export function CardDescription({
  className,
  ...props
}: React.ComponentProps<'p'>): React.JSX.Element {
  return <p className={cn('text-sm leading-7 text-muted-foreground', className)} {...props} />;
}

/**
 * Renders the main body content area for a card.
 *
 * @param props - The card content props.
 * @returns `CardContent` returns a padded content container for card body
 * elements.
 */
export function CardContent({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element {
  return <div className={cn('px-6 pb-6 sm:px-7', className)} {...props} />;
}
