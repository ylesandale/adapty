import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Страница не найдена
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Извините, страница которую вы ищете не существует или была перемещена.
        </p>
        <Link href="/">
          <Button>
            Вернуться на главную
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

