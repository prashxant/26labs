import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight">404</h2>
            <h3 className="text-2xl font-semibold -mt-2">Page Not Found</h3>
            <p className="max-w-[400px] text-muted-foreground">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
            </p>
            <Link href="/">
                <Button variant="default" size="lg">
                    Return Home
                </Button>
            </Link>
        </div>
    );
}
