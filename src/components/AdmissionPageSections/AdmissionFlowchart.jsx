import React from 'react';
import AdmissionStepCard from './AdmissionStepCard';

const admissionSteps = [
  { num: '01', title: 'Enquiry Stage', desc: [
    'The process of Parent / Guardian Enquiry starts.'
  ], numColor: 'text-[#3B82F6]' },

  { num: '02', title: 'Counselling', desc: [
    'Interaction with Admission Counselor.',
    'Furnish basic info & requirements.'
  ], numColor: 'text-[#F59E0B]' },

  { num: '03', title: 'Application Form', desc: [
    'Collect / Fill Admission form.',
    'Submit required documents (Birth Certificate, ID, etc.).'
  ], numColor: 'text-[#EC4899]' },

  { num: '04', title: 'Document Verifications', desc: [
    'Submit written/submitted documents.',
    'Schedule for Interaction / Test (if applicable).'
  ], numColor: 'text-[#EF4444]' },

  { num: '05', title: 'Student Assessment (if required)', desc: [
    'Written Test / Oral Interaction (as per class).'
  ], numColor: 'text-[#10B981]' },

  { num: '06', title: 'Interview/Meeting', desc: [
    'Parents & Child meeting with Principal or Team.'
  ], numColor: 'text-[#8B5CF6]' },

  { num: '07', title: 'Admission Decision', desc: [
    'Application Review.',
    'Admission Approved / Waitlisted / Declined.'
  ], numColor: 'text-[#F43F5E]' },

  { num: '08', title: 'Fee Payment', desc: [
    'Pay Admission & Term Fees.',
    'Receive receipt issued.'
  ], numColor: 'text-[#F59E0B]' },

  { num: '09', title: 'Admission Confirmation', desc: [
    'Welcome Kit / Uniform / Booklet Shared.'
  ], numColor: 'text-[#06B6D4]' },

  { num: '10', title: 'Orientation', desc: [
    'Orientation Session scheduled.',
    'Student Joins School.'
  ], numColor: 'text-[#22C55E]' },
];

const AdmissionFlowchart = () => {
  return (
    <div className="bg-gradient-to-b from-[#DDD6FF] to-[#FFE5FD] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#212529] mb-8">
            College Admission Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
          {admissionSteps.map((step) => (
            <AdmissionStepCard
              key={step.num}
              number={step.num}
              title={step.title}
              description={step.desc}
              numberColor={step.numColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionFlowchart;
