// ToDo
// - Update props etc.

export function Logo({
  background = "dark",
  className = "",
  ...props
}: {
  background?: "light" | "dark";
  className?: string;
  [x: string]: any;
}) {
  return (
    <div
      style={{ width: "160px", height: "15px" }}
      className={className}
      {...props}
    >
      {background === "dark" ? (
        <img
          src="/logo/brand-logo-dark-bg.svg"
          alt="Pragers logo"
          width="160"
          height="15"
        />
      ) : (
        <img
          src="/logo/brand-logo-light-bg.svg"
          alt="Pragers logo"
          width="160"
          height="15"
        />
      )}
    </div>
  );
}
