import Layout from "../componets/layout/layout";
import "../pages/pages_css/department.css";

const Department_page = () => {
  const departments = [
    {
      title: "General & Internal Medicine",
      items: ["General Medicine", "Internal Medicine", "Family Medicine"]
    },
    {
      title: "Surgical Departments",
      items: [
        "General Surgery",
        "Orthopedics (Bones & Joints)",
        "Neurosurgery (Brain & Nervous System)",
        "Cardiothoracic Surgery (Heart & Lungs)",
        "Plastic & Reconstructive Surgery",
        "Urology (Urinary System & Male Reproductive System)",
        "ENT (Ear, Nose & Throat) Surgery",
        "Ophthalmology (Eye Surgery)"
      ]
    },
    {
      title: "Specialty Medicine",
      items: [
        "Cardiology (Heart)",
        "Neurology (Brain & Nervous System)",
        "Pulmonology (Lungs & Respiratory System)",
        "Gastroenterology (Digestive System)",
        "Nephrology (Kidneys)",
        "Endocrinology (Hormones & Metabolism)",
        "Rheumatology (Joints & Autoimmune Diseases)",
        "Dermatology (Skin)",
        "Oncology (Cancer)",
        "Hematology (Blood Disorders)"
      ]
    },
    {
      title: "Pediatrics & Women's Health",
      items: [
        "Pediatrics (Children's Health)",
        "Neonatology (Newborn & Premature Babies)",
        "Obstetrics & Gynecology (Pregnancy & Women's Health)"
      ]
    },
    {
      title: "Psychiatry & Emergency Care",
      items: [
        "Psychiatry (Mental Health)",
        "Psychology (Behavioral & Emotional Health)",
        "Emergency Medicine",
        "Critical Care & Intensive Care Unit (ICU)"
      ]
    },
    {
      title: "Diagnostic & Rehabilitation",
      items: [
        "Radiology (X-rays, MRI, CT Scans)",
        "Pathology (Lab Tests & Disease Diagnosis)",
        "Physiotherapy & Rehabilitation",
        "Anesthesiology (Pain Management & Surgery Support)"
      ]
    }
  ];

  return (
    <Layout>
      <div className="department-container">
        <h1>Departments Available in Our Hospital</h1>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-card">
              <h2>{dept.title}</h2>
              <ul>
                {dept.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Department_page;