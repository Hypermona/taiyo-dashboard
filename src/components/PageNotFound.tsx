import { Button } from "./ui/button";
import { TriangleAlertIcon } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="rounded-xl flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlertIcon className="mx-auto h-12 w-12 text-primary" color="red" />
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">
          Oops, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Button variant={"destructive"} onClick={() => (window.location.href = "/")}>
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
