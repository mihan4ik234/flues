import React, { useState } from 'react';
import './zaiavka.css';

function Zaiavka() {
    const [formData, setFormData] = useState({
        date: '',
        place: '',
        car_number: ''
    });
    const [file, setFile] = useState(null); // Состояние для хранения файла

    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('date', formData.date);
            formDataToSend.append('place', formData.place);
            formDataToSend.append('car_number', formData.car_number);
            formDataToSend.append('file', file); // Добавляем файл в объект FormData

            const response = await fetch('http://localhost:5000/submitZaiavka', {
                method: 'POST',
                body: formDataToSend
            });
            const data = await response.json();
            console.log('Saved Zaiavka:', data);
        } catch (error) {
            console.error('Error submitting Zaiavka:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <>

        </>
    );
}

export default Zaiavka;
