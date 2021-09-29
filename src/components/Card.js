export default function Card({bgColor = "", children, title}) {
  return (
    <div className={`w-screen md:w-2/4 lg:w-2/5 sm:w-3/4 xl:w-1/4 card ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ""}`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
