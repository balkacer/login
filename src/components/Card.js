export default function ({bgColor = "", children, title}) {
  return (
    <div className={`card shadow-2xl ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ""}`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
