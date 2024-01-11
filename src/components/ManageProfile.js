import Select from "react-select";
import React, {useState} from "react";

const ManageProfile = () => {

    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});


    const option1 = [
        {value: 'Swagat', label: 'Swagat'},
        {value: 'Ram', label: 'Ram'},
        {value: 'Hari', label: 'Hari'}
    ];

    const option2 = [
        {value: 'Swagat', label: 'Swagat'},
        {value: 'Ram', label: 'Ram'},
        {value: 'Hari', label: 'Hari'}
    ];

    const countries = [
        {value: 'india', label: 'IND'},
        {value: 'usa', label: 'USA'},
        {value: 'uk', label: 'UK'}
    ];

    const citiesByCountry = {
        india: [
            {value: 'ban', label: 'Bangalore'},
            {value: 'mum', label: 'Mumbai'},
            {value: 'del', label: 'Delhi'},
        ],
        usa: [
            {value: 'nyc', label: 'New York City'},
            {value: 'la', label: 'Los Angeles'},
            {value: 'was', label: 'Washington'},
        ],
        uk: [
            {value: 'london', label: 'London'},
            {value: 'manchester', label: 'Manchester'},
        ]
    };

    const customStyles = {
        control: (styles) => ({
            ...styles,
            borderColor: errors.countries || errors.city ? '#e53e3e' : styles.borderColor,
        }),
    };

    const validateForm = () => {
        const errors = {};

        if (username.trim().length < 4) {
            errors.username = 'Username must be at least 4 characters long';
        }

        if (!gender) {
            errors.gender = 'Please select gender';
        }

        if (user1.length === 0) {
            errors.option1 = 'Please select at least one option';
        }

        if (user2.length === 0) {
            errors.option2 = 'Please select at least one option';
        }

        if (!selectedCountry) {
            errors.countries = 'Please select a country';
        }

        if (!selectedCity) {
            errors.city = 'Please select a city';
        }

        if (!image) {
            errors.image = 'Please select an Image';
        }

        if (address.trim().length < 6) {
            errors.address = 'Address must be at least 6 characters long';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form Submitted with Values:", {
                username,
                gender,
                user1,
                user2,
                selectedCountry,
                selectedCity,
                address,
                image,
            });
        } else {
            console.log("Form has some errors. please check and fix");
        }
    };

    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        setSelectedCity(null);
    }

    return (
        <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white mt-6">
            <h2 className="text-2xl font-bold mb-4">Manage Profile</h2>
            {/*Username Textbox */}
            <form onSubmit={handleSubmit}>
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

                {/*Gender Radio Buttons */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Gender:
                    </label>
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
                        <label className="mr-4">
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
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/*Multiselect Dropdown 1*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User 1:
                    </label>
                    <Select
                        id="user-1"
                        isMulti
                        options={option1}
                        value={user1}
                        onChange={(user) => setUser1(user)}
                        styles={customStyles}
                    />
                    {errors.option1 && <p className="text-red-500 text-sm mt-1">{errors.option1}</p>}
                </div>

                {/*Multiselect Dropdown 2*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User 2:
                    </label>
                    <Select
                        id="user-2"
                        isMulti
                        options={option2}
                        value={user2}
                        onChange={(user) => setUser2(user)}
                        styles={customStyles}
                    />
                    {errors.option2 && <p className="text-red-500 text-sm mt-1">{errors.option2}</p>}
                </div>

                {/*Country Dropdown*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Country:
                    </label>
                    <Select
                        id="country"
                        options={countries}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        styles={customStyles}
                    />
                    {errors.countries && <p className="text-red-500 text-sm mt-1">{errors.countries}</p>}
                </div>

                {/*City Dropdown(Depends on Country)*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select City:
                    </label>
                    <Select
                        id="city"
                        options={selectedCountry ? citiesByCountry[selectedCountry.value] : []}
                        value={selectedCity}
                        onChange={(selected) => setSelectedCity(selected)}
                        styles={customStyles}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                {/* Image Upload Button */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Image:
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className= {`w-full border rounded-md px-3 py-2 ${errors.image ? 'border-red-500' : ''}`}
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                </div>

                {/*Address Textbox */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address:
                    </label>
                    <textarea
                        id="username"
                        className={`w-full border rounded-md px-3 py-2 ${errors.address ? 'border-red-500' : ''}`}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                </button>
            </form>

        </div>
    )
};

export default ManageProfile;
