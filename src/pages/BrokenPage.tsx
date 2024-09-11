// dummy component to simulate an unhandled exception
function BrokenPage() {
  throw new Error("error page");
  return <></>;
}

export default BrokenPage;
