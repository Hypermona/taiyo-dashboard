import { Button } from "@/components/ui/button";

export default function ComponentError() {
  return (
    <div className="rounded-xl my-5 flex sm:min-h-[90vh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Oops, something went wrong!
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're sorry, but an unexpected error has occurred while loading this component.{" "}
          <strong>Please check your network connection</strong> and try again later or contact
          support if the issue persists.
        </p>
        <div className="mt-6">
          <Button
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
}
