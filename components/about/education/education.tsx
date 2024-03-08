import School from '@/components/about/education/school';

export default function Education() {
    return (
        <>
            <h2>Education</h2>
            <School
                description="High School"
                name="Venice High School"
                location="Venice, FL"
                startDate="Graduated 05/2015"
            />
            <School
                description="Drafting"
                name="Suncoast Technical College"
                location="Sarasota, FL"
                startDate="02/2020"
                endDate="02/2021"
            >
                <p>Gained proficiency in AutoCAD, Solidworks, and Inventor through various certifications.</p>
            </School>
            <School
                description="AS - Computer Programming & Anaylsis"
                name="State College of Florida, Manatee-Sarasota"
                location="Sarasota, FL"
                startDate="2021"
                endDate="approx. 05/2023"
            >
                <p>51 of 60 credits completed as of December, 2023.</p>
            </School>


        </>
    )
}