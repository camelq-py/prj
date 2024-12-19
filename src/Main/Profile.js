import React, { useState } from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

function InstitutionProfile() {
    // State variables for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [surname, setSurname] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [experience, setExperience] = useState('');
    const [codingKnowledge, setCodingKnowledge] = useState('');
    const [educationQualification, setEducationQualification] = useState('');
    const [passedOutYear, setPassedOutYear] = useState('');
    const [percentage, setPercentage] = useState('');
    const [logo, setLogo] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input change
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (event) => {
        event.preventDefault();
        setSuccessMessage('Profile Saved Successfully!');
    };

    return (
        <div className="institution-profile-container">
            <h1 className="institution-header">Institution Profile</h1>

            <div className="institution-logo-container">
                {logo ? (
                    <img src={logo} alt="Institution Logo" className="institution-logo" />
                ) : (
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Institution Logo"
                        className="institution-logo"
                    />
                )}
                <input
                    type="file"
                    className="logo-upload-button"
                    onChange={handleLogoChange}
                    accept="image/*"
                />
            </div>

            <form className="institution-form" onSubmit={handleSave}>
                <div>
                    <label className="institution-label">First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleInputChange(setFirstName)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleInputChange(setLastName)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Surname:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={handleInputChange(setSurname)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Father's Name:</label>
                    <input
                        type="text"
                        value={fatherName}
                        onChange={handleInputChange(setFatherName)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Contact Number:</label>
                    <input
                        type="text"
                        value={contactNumber}
                        onChange={handleInputChange(setContactNumber)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={handleInputChange(setAddress)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Pincode:</label>
                    <input
                        type="text"
                        value={pincode}
                        onChange={handleInputChange(setPincode)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Gender:</label>
                    <select
                        value={gender}
                        onChange={handleInputChange(setGender)}
                        className="institution-input"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="institution-label">Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={handleInputChange(setDob)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Experience:</label>
                    <select
                        value={experience}
                        onChange={handleInputChange(setExperience)}
                        className="institution-input"
                    >
                        <option value="Fresher">Fresher</option>
                        <option value="Experienced">Experienced</option>
                    </select>
                </div>
                <div>
                    <label className="institution-label">Do you have coding knowledge?</label>
                    <select
                        value={codingKnowledge}
                        onChange={handleInputChange(setCodingKnowledge)}
                        className="institution-input"
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label className="institution-label">Education Qualification:</label>
                    <input
                        type="text"
                        value={educationQualification}
                        onChange={handleInputChange(setEducationQualification)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Passed Out Year:</label>
                    <input
                        type="text"
                        value={passedOutYear}
                        onChange={handleInputChange(setPassedOutYear)}
                        className="institution-input"
                    />
                </div>
                <div>
                    <label className="institution-label">Percentage:</label>
                    <input
                        type="text"
                        value={percentage}
                        onChange={handleInputChange(setPercentage)}
                        className="institution-input"
                    />
                </div>

                <div className="button-container">
                    <button type="submit" className="institution-save-button">
                        Save Profile
                    </button>
                </div>
            </form>

            {successMessage && (
                <div className="success-message">
                    <p>{successMessage}</p>
                </div>
            )}
        </div>
    );
}

export default InstitutionProfile;
