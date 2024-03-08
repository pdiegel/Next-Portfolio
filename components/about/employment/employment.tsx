import Job from '@/components/about/employment/job';

export default function EmploymentHistory() {
    return (
        <>
            <h2>Work Experience</h2>
            <Job
                jobTitle="Software Developer & AutoCAD Drafter"
                company="Red Stake Surveyors, Inc."
                location="Sarasota, FL"
                startDate="07/2019"
                endDate="Present"
            >
                <li>Oversee AutoCAD projects, from residential to commercial surveys.</li>
                <li>Develop Python tools using Tkinter, Pandas, and SQL for database management.</li>
                <li>Manage survey drafting with high precision and efficiency.</li>
                <li>Collaborate with engineers, clients, and homeowners for tailored solutions.</li>
                <li>Drive software projects to boost operational productivity.</li>
            </Job>
            <Job
                jobTitle="Inventory Auditor"
                company="RGIS Inventory Specialists"
                location="Sarasota, FL"
                startDate="05/2015"
                endDate="04/2019"
            >
                <li>Adapted to dynamic job locations and flexible work schedules.</li>
                <li>Worked collaboratively with diverse teams and supervisors.</li>
                <li>Provided technical support for equipment-related issues.</li>
                <li>Achieved top individual proficiency level in the company.</li>
            </Job>

        </>
    )
}