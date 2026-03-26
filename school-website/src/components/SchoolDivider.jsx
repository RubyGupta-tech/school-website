import "./SchoolDivider.css";

function SchoolDivider({ icon = "📚", subtitle = "" }) {
  return (
    <div className="school-divider">
      <div className="divider-line left"></div>
      <div className="divider-badge">
        <div className="divider-icon">{icon}</div>
        {subtitle && <span className="divider-subtitle">{subtitle}</span>}
      </div>
      <div className="divider-line right"></div>
    </div>
  );
}

export default SchoolDivider;
