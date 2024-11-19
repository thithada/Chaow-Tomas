export default function MyProfile() {
    const studentInfo = {
        name: "ธีร์ธดา อิสลาม",
        studentId: "66026055",
        major: "Software Engineer",
        email: "66026055@up.ac.th",
        phone: "0934949511"
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลส่วนตัว</h1>
                <div className="space-y-4 text-gray-800">
                    <p><strong>ชื่อ:</strong> {studentInfo.name}</p>
                    <p><strong>รหัสนิสิต:</strong> {studentInfo.studentId}</p>
                    <p><strong>สาขาวิชา:</strong> {studentInfo.major}</p>
                    <p><strong>อีเมล:</strong> {studentInfo.email}</p>
                    <p><strong>เบอร์โทรศัพท์:</strong> {studentInfo.phone}</p>
                </div>
            </div>
        </div>
    );
}