export default function Card({bgColor = "", children}) {
  return (
    <div className={`w-screen h-screen card ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ""}`}>
      <div className="card-body w-full h-screen items-center justify-start md:justify-center overflow-auto">
        {children}
      </div>
    </div>
  );
}
