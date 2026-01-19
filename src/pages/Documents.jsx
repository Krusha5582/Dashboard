// src/pages/Documents.jsx
// FINAL – REALISTIC, GOVERNED, INTERACTIVE (ENTERPRISE-GRADE)

import { useRef, useState } from "react";

function Documents() {
  const fileInputRef = useRef(null);
  const [activeUpload, setActiveUpload] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [documents, setDocuments] = useState({
    required: [
      { name: "Financial Statements", status: "pending" },
      { name: "Standardized Test Scores", status: "pending" }
    ],
    needsUpdate: [
      {
        name: "Academic Transcripts",
        status: "expired",
        why: "Required to proceed with visa filing."
      },
      {
        name: "Recommendation Letters",
        status: "incomplete",
        why: "Required to proceed with visa filing."
      }
    ],
    submitted: [
      {
        name: "Passport Copy",
        status: "submitted",
        why: "Review typically takes 3–5 working days.",
        reviewedOn: "—"
      },
      {
        name: "Statement of Purpose",
        status: "submitted",
        why: "Review typically takes 3–5 working days.",
        reviewedOn: "—"
      }
    ],
    verified: [
      {
        name: "High School Diploma",
        status: "verified",
        verifiedOn: "12 Mar 2025"
      },
      {
        name: "English Proficiency",
        status: "verified",
        verifiedOn: "18 Mar 2025"
      }
    ]
  });

  /* ---------------- STATUS HELPERS ---------------- */

  const getStatusIcon = (status) => {
    switch (status) {
      case "verified": return "✓";
      case "submitted": return "⏳";
      case "expired": return "!";
      case "incomplete": return "⚠";
      default: return "•"; // neutral, non-selectable
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "submitted":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "expired":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "incomplete":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const canUpload = (status) =>
    status === "pending" || status === "expired" || status === "incomplete";

  /* ---------------- UPLOAD FLOW ---------------- */

  const handleUploadClick = (section, index) => {
    if (isUploading) return;
    setActiveUpload({ section, index });
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (!e.target.files.length || !activeUpload) return;

    setIsUploading(true);

    const { section, index } = activeUpload;
    const updatedDocs = structuredClone(documents);
    const doc = updatedDocs[section][index];

    setTimeout(() => {
      updatedDocs[section].splice(index, 1);

      updatedDocs.submitted.push({
        name: doc.name,
        status: "submitted",
        why: "Review typically takes 3–5 working days.",
        reviewedOn: "—"
      });

      setDocuments(updatedDocs);
      setActiveUpload(null);
      setIsUploading(false);
      e.target.value = "";
    }, 700);
  };

  /* ---------------- ADD DOCUMENT ---------------- */

  const handleAddNewDocument = () => {
    const name = prompt("Upload additional document (only if requested)");
    if (!name) return;

    setDocuments((prev) => ({
      ...prev,
      required: [...prev.required, { name, status: "pending" }]
    }));
  };

  /* ---------------- RENDER SECTION ---------------- */

  const renderSection = (title, sectionKey, docs, allowUpload = false) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8">
      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gray-400" />
        {title}
        <span className="ml-auto text-sm text-gray-500">({docs.length})</span>
      </h3>

      <div className="space-y-4">
        {docs.map((doc, index) => (
          <div
            key={index}
            className={`flex items-start justify-between p-4 rounded-xl border ${getStatusColor(doc.status)}`}
          >
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold ${getStatusColor(doc.status)}`}
              >
                {getStatusIcon(doc.status)}
              </div>

              <div>
                <p className="font-semibold text-gray-900">{doc.name}</p>

                {doc.why && (
                  <p className="text-sm text-gray-600 mt-1">{doc.why}</p>
                )}

                {doc.reviewedOn && (
                  <p className="text-xs text-gray-500 mt-1">
                    Last reviewed: {doc.reviewedOn}
                  </p>
                )}

                {doc.verifiedOn && (
                  <p className="text-xs text-gray-500 mt-1">
                    Verified on: {doc.verifiedOn}
                  </p>
                )}
              </div>
            </div>

            {allowUpload && canUpload(doc.status) && (
              <div className="ml-4 text-right">
                <button
                  onClick={() => handleUploadClick(sectionKey, index)}
                  disabled={isUploading}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  {isUploading ? "Uploading…" : "Upload"}
                </button>
                <p className="mt-1 text-xs text-gray-500">
                  PDF/JPG • Max 5MB
                </p>
              </div>
            )}
          </div>
        ))}

        {allowUpload && (
          <button
            onClick={handleAddNewDocument}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:bg-gray-50"
          >
            + Upload additional document (if requested)
          </button>
        )}
      </div>
    </div>
  );

  /* ---------------- PAGE ---------------- */

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 bg-gray-50 min-h-screen">
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Documents</h1>
        <p className="text-gray-600 text-lg">
          Upload required documents. Your counsellor reviews and verifies everything.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderSection("Needs Update", "needsUpdate", documents.needsUpdate, true)}
        {renderSection("Required Documents", "required", documents.required, true)}
        {renderSection("Under Review", "submitted", documents.submitted)}
        {renderSection("Verified", "verified", documents.verified)}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 text-center space-y-2">
        <p className="text-gray-600">
          If no upload button is visible, your documents are being reviewed.
          No action is required.
        </p>
        <p className="text-sm text-gray-500">
          If a document remains under review for more than 5 working days,
          contact your counsellor.
        </p>
      </div>
    </div>
  );
}

export default Documents;
