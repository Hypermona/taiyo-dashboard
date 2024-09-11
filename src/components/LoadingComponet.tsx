export default function LoadingComponent() {
  return (
    <div className="rounded-xl relative w-full min-h-[45vh] sm:min-h-[90vh] bg-muted my-5 overflow-hidden">
      <div className="absolute inset-0 animate-pulse">
        <div className="w-full h-full bg-gradient-to-r from-muted to-muted-foreground/50" />
      </div>
      <div className="absolute top-4 left-4 grid gap-4">
        <div className="w-32 h-8 bg-muted-foreground/20 rounded-md" />
        <div className="w-40 h-8 bg-muted-foreground/20 rounded-md" />
      </div>
      <div className="absolute bottom-4 left-4 grid gap-4">
        <div className="w-24 h-8 bg-muted-foreground/20 rounded-md" />
        <div className="w-32 h-8 bg-muted-foreground/20 rounded-md" />
      </div>
      <div className="absolute top-4 right-4 w-48 h-8 bg-muted-foreground/20 rounded-md" />
    </div>
  );
}
