import React from "react";

// Define the colors based on the image and request
const MAROON_TEXT = "#A00000";
const SCHOOL_HIGHLIGHT_COLOR = "#A00000";

// The two colors for the gradient background
const GRADIENT_START = "#E0D7FF";
const GRADIENT_END = "#F8E0F9";

const AdmissionDetails = () => {
  return (
    // 1. Full-width container with a white background (default behavior of min-h-screen)
    // Removed the inline gradient style here
    <div className="min-h-screen py-0 bg-white">
      {/* 2. Main content container - **Now applying the gradient here**, centered, with rounded corners and shadow */}
      <div
        className="max-w-7xl mx-auto p-10 sm:p-12 lg:p-16"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${GRADIENT_START}, ${GRADIENT_END})`,
        }}
      >
        {/* Main Heading */}
        <h3 className="text-3xl font-bold mb-8" style={{ color: MAROON_TEXT }}>
          School Admissions in Hyderabad - Apply for 2025-2026
        </h3>

        {/* Grid for content (Text) and the Form (all inside the colored box) */}
        <div className="grid lg:grid-cols-2 gap-14">
          {/* LEFT TEXT (No change here) */}
          <div className="text-[#212529] text-[1.05rem] leading-relaxed">
            <p className="mb-6">
              We are delighted that you are considering{" "}
              <span
                className="font-semibold"
                style={{ color: SCHOOL_HIGHLIGHT_COLOR }}
              >
                St. Carmel School
              </span>{" "}
              for your child's education and thank you for your interest. While
              most of the essential information is available on our website, we
              warmly invite you to visit our campus to gain a clearer
              understanding of the holistic learning experience we provide for
              the overall growth and development of your child.
            </p>

            <p className="mb-6">
              As part of the admission process, a **fitment test is conducted**,
              followed by an **interaction session** with both the prospective
              student and parents. This interaction helps our educators
              understand the child's interests, learning abilities, and subject
              preferences. Beyond academic performance and potential,{" "}
              <span
                className="font-semibold"
                style={{ color: SCHOOL_HIGHLIGHT_COLOR }}
              >
                St. Carmel School
              </span>{" "}
              values qualities that reflect a student's enthusiasm to actively
              engage in the wide range of opportunities offered both inside and
              outside the classroom. We seek students who will contribute
              positively, participate wholeheartedly, and leave a lasting impact
              within the school community.
            </p>

            <p className="mb-10 italic text-sm" style={{ color: MAROON_TEXT }}>
              Please note, the school reserves the right to refuse admission or
              re-admission at its discretion.
            </p>

            {/* Sub-Heading (No change here) */}
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: MAROON_TEXT }}
            >
              Nursery & Preschool Admissions – Early Learning Starts Here
            </h3>

            {/* Age Criteria (No change here) */}
            <p className="font-bold text-gray-800 mb-3 text-lg">
              CBSE & Cambridge Admissions - Age Criteria:
            </p>
            <ul className="list-none text-gray-700 space-y-2 text-lg">
              <li>Nursery – 3 to 4 yrs</li>
              <li>Jr.Kg – 4 to 5 yrs</li>
              <li>Sr.Kg – 5 to 6 yrs</li>
              <li>Grade I – 6 to 7 yrs</li>
            </ul>

            <p className="font-bold text-gray-800 mt-8 mb-3 text-lg">
              Cambridge Age Criteria:
            </p>
            <ul className="list-none text-gray-700 space-y-2 text-lg">
              <li>Stage 1 – 5 to 6 yrs</li>
            </ul>
          </div>

          {/* RIGHT FORM - ONLY THIS PART IS MODIFIED */}
          <div className="flex justify-center lg:justify-end items-start pt-8 lg:pt-0 pr-8">
         <form className="space-y-5 w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
              {[
                "Child Name*",
                "Guardians Name*",
                "Email*",
                "Phone Number*",
                "Class Applying For*",
              ].map((label, index) => (
                <div key={index} className="pb-2">
                  <label
                    htmlFor={label.replace(/\s/g, "")}
                    className="text-sm text-gray-700 block mb-1"
                  >
                    {label.split("*")[0]}*
                  </label>
                  <input
                    type={
                      label.includes("Email")
                        ? "email"
                        : label.includes("Phone")
                        ? "tel"
                        : "text"
                    }
                    id={label.replace(/\s/g, "")}
                    className="w-full px-3 py-2 text-base border border-gray-400 rounded-md focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition"
                    required
                  />
                </div>
              ))}

              {/* Consent Checkbox */}
              <div className="pt-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 mr-2 accent-red-600 h-4 w-4"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-[11px] text-gray-600 leading-snug"
                  >
                    I hereby authorize St. Carmel School to contact me. By
                    providing your contact information, you expressly consent to
                    receive communication from the school administration. We may
                    also contact you in the future through SMS/E-mail/WhatsApp.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-5">
                <button
                  type="submit"
                  className="px-8 py-2.5 text-base text-white rounded font-semibold transition duration-200 hover:opacity-90"
                  style={{ backgroundColor: MAROON_TEXT }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetails;
