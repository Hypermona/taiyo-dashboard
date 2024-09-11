import { TriangleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouteError } from "react-router-dom";

export default function GlobalError() {
  const error = useRouteError();
  // we can send this to our error monitoring service eg: sentry or logrocket
  console.error(error);
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlertIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're sorry, but an unexpected error has occurred. Please try again later or contact
          support if the issue persists.
        </p>
        <div className="mt-6">
          <Button variant={"link"} onClick={() => (window.location.href = "/")}>
            Go to Homepage
          </Button>
          <Button onClick={() => window.location.reload()}>Reload the Page</Button>
        </div>
      </div>
    </div>
  );
}
