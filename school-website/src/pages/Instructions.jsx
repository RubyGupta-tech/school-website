import { Link } from "react-router-dom";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="instructions-page container section" style={{ marginTop: '120px' }}>
      <div className="instructions-card card">
        <div className="instructions-header">
          <h1>Registration Instructions</h1>
          <p>Elite Academy – Session 2025-26</p>
          <div className="divider" style={{ margin: '20px auto' }}></div>
        </div>

        <div className="instructions-content">
          <section>
            <h3>⚠️ Important Notice for Class XI (2025-26)</h3>
            <p>Courses offered at Elite Academy:</p>
            <ul>
              <li><b>Science:</b> Physics, Chemistry, Mathematics/Biology with CS/PHE.</li>
              <li><b>Commerce:</b> Accountancy, Business Studies, Economics with Math/PHE.</li>
              <li><b>Humanities:</b> History, Political Science, Sociology/Economics.</li>
            </ul>
            <p><i>Note: English is compulsory for all streams.</i></p>
          </section>

          <section>
            <h3>📄 Documents Required</h3>
            <ul>
              <li>Photocopies of fully updated Report Cards of Classes 9 and 10.</li>
              <li>Photocopy of AADHAR Card of the student.</li>
              <li>Passport size photograph of the student and parents.</li>
            </ul>
          </section>

          <section>
            <h3>⚙️ Technical Guidelines</h3>
            <ol>
              <li>This form works best on <b>Firefox</b> and <b>Google Chrome</b>.</li>
              <li>Ensure you have a stable internet connection.</li>
              <li><b>Do not refresh</b> the page or open it in a new tab while filling the form.</li>
              <li>Fill all entries in <b>CAPITAL LETTERS</b> only.</li>
              <li>The Registration Fee (Non-refundable) is <b>₹1,000</b>.</li>
            </ol>
          </section>

          <section className="disclaimer">
            <h3>⚖️ Disclaimer</h3>
            <p>The School Management reserves the right to add, amend or cancel any of the rules or procedures prevailing at any time which will be binding on the students and parents.</p>
          </section>
        </div>

        <div className="instructions-footer">
          <Link to="/admissions#apply-form" className="btn btn-primary">
            Proceed to Registration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
