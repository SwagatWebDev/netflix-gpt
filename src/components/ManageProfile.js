// ManageProfile.js
import React, { useState } from 'react';
import Select from 'react-select';

const ManageProfile = () => {
    // State for form fields
    const [username, setUsername] = useState('');
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const [gender, setGender] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [additionalText, setAdditionalText] = useState('');
    const [errors, setErrors] = useState({});

    // Options for the multiselect dropdowns
    const options1 = [
        { value: 'Swagat', label: 'Swagat' },
        { value: 'Ram', label: 'Ram' },
        { value: 'Hari', label: 'Hari' },
    ];

    const options2 = [
        { value: 'Swagat', label: 'Swagat' },
        { value: 'Ram', label: 'Ram' },
        { value: 'Hari', label: 'Hari' },
    ];

    const countries = [
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
    ];

    const citiesByCountry = {
        usa: [
            { value: 'nyc', label: 'New York City' },
            { value: 'la', label: 'Los Angeles' },
        ],
        canada: [
            { value: 'toronto', label: 'Toronto' },
            { value: 'vancouver', label: 'Vancouver' },
        ],
        uk: [
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
        ],
    };

    // Validation function
    const validateForm = () => {
        const errors = {};

        if (username.trim().length < 3) {
            errors.username = 'Username must be at least 3 characters long';
        }

        if (selectedOptions1.length === 0) {
            errors.options1 = 'Please select at least one option';
        }

        if (selectedOptions2.length === 0) {
            errors.options2 = 'Please select at least one option';
        }

        if (!selectedCountry) {
            errors.country = 'Please select a country';
        }

        if (!selectedCity) {
            errors.city = 'Please select a city';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        if (validateForm()) {
            // Add your logic here to handle the form submission
            console.log('Form submitted with values:', {
                username,
                selectedOptions1,
                selectedOptions2,
                gender,
                selectedCountry,
                selectedCity,
            });
        } else {
            console.log('Form has errors. Please fix them.');
        }
    };

    // Event handler for country selection
    const handleCountryChange = (selected) => {
        setSelectedCountry(selected);
        setSelectedCity(null); // Reset city when country changes
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4">Manage Profile</h2>
            <form onSubmit={handleSubmit}>
                {/* Username Textbox */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        className={`w-full border rounded-md px-3 py-2 ${errors.username ? 'border-red-500' : ''}`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                {/* Radio Buttons */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                                className="mr-1"
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                                className="mr-1"
                            />
                            Female
                        </label>
                    </div>
                </div>

                {/* Multiselect Dropdown 1 */}
                <div className="mb-4">
                    <label htmlFor="options1" className="block text-gray-700 text-sm font-bold mb-2">
                        User 1:
                    </label>
                    <Select
                        id="options1"
                        isMulti
                        options={options1}
                        value={selectedOptions1}
                        onChange={(selected) => setSelectedOptions1(selected)}
                        className={`${errors.options1 ? 'border-red-500' : ''}`}
                    />
                    {errors.options1 && <p className="text-red-500 text-sm mt-1">{errors.options1}</p>}
                </div>

                {/* Multiselect Dropdown 2 */}
                <div className="mb-4">
                    <label htmlFor="options2" className="block text-gray-700 text-sm font-bold mb-2">
                        User 2:
                    </label>
                    <Select
                        id="options2"
                        isMulti
                        options={options2}
                        value={selectedOptions2}
                        onChange={(selected) => setSelectedOptions2(selected)}
                        className={`${errors.options2 ? 'border-red-500' : ''}`}
                    />
                    {errors.options2 && <p className="text-red-500 text-sm mt-1">{errors.options2}</p>}
                </div>

                {/* Country Dropdown */}
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                        Select Country:
                    </label>
                    <Select
                        id="country"
                        options={countries}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className={`${errors.country ? 'border-red-500' : ''}`}
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>

                {/* City Dropdown (Dependent on Country) */}
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                        Select City:
                    </label>
                    <Select
                        id="city"
                        options={selectedCountry ? citiesByCountry[selectedCountry.value] : []}
                        value={selectedCity}
                        onChange={(selected) => setSelectedCity(selected)}
                        className={`${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                {/* Additional Textbox */}
                <div className="mb-4">
                    <label htmlFor="additionalText" className="block text-gray-700 text-sm font-bold mb-2">
                        Address:
                    </label>
                    <textarea
                        id="additionalText"
                        className={`w-full border rounded-md px-3 py-2 ${errors.additionalText ? 'border-red-500' : ''}`}
                        value={additionalText}
                        onChange={(e) => setAdditionalText(e.target.value)}
                    />
                    {errors.additionalText && <p className="text-red-500 text-sm mt-1">{errors.additionalText}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ManageProfile;
