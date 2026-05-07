export default function Background() {
    return (
      <>
        <div className="mesh-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
      </>
    );
  }