import {FaXmark} from 'react-icons/fa6';
import {useState} from 'react';
import {toast} from 'react-toastify';
import {getLocalStorage} from '../utils/storage.js';

const EventForm = () => {
    const [{title, description, imgurl, date, location, latitude, longitude}, setFormState] = useState({
        title: '',
        description: '',
        imgurl: '',
        date: '',

        // TODO: NEED TO SET UP LOCATION SOMEHOW
        location: '',
        latitude: 8.404746955649602,
        longitude: 49.01438194665317
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(previousState => ({
            ...previousState,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            if (!title || !description || !date || !location) throw new Error('Please fill out all required fields!');

            const token = getLocalStorage('SignedIn');
            const event = {
                title: title,
                description: description,
                imgurl: imgurl === "" ? "https://via.assets.so/img.jpg?w=1280&h=900" : imgurl,
                date: date,
                location: location,
                latitude: latitude,
                longitude: longitude,
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(event)
            }

            const result = await fetch('http://localhost:3001/api/events', options)
            const data = await result.json();
            if (data.error) throw new Error(data.error);

            document.getElementById('event-form').close();
            setFormState(prev => ({
                ...prev,
                title: '',
                description: '',
                imgurl: '',
                date: '',
                location: '',
                latitude: 8.404746955649602,
                longitude: 49.01438194665317
            }));
            toast.success('Successfully added event!');
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <dialog id="event-form" className="modal">
            <div className="modal-box h-fit p-8">
                <form method="dialog">
                    <button className="absolute text-2xl right-2 top-2">
                        <FaXmark />
                    </button>
                </form>
                <h3 className="font-bold text-lg text-center mb-8">ADD NEW EVENT</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input name="title" type="text" placeholder="Impressive event title" value={title} onChange={handleChange} required />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                        <input name="location" type="text" autoComplete="off" placeholder="Amazing event location" value={location} onChange={handleChange} required />
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="input-field">
                        <input name="date" type="date" value={date} onChange={handleChange} required />
                        <label htmlFor="date"></label>
                    </div>
                    <div className="input-field">
                        <input name="imgurl" type="text" autoComplete="off" placeholder="https://via.assets.so/img.jpg?w=500&h=300" value={imgurl} onChange={handleChange} />
                        <label htmlFor="imgurl">Image</label>
                    </div>
                    <div className="input-field">
                        <textarea name="description" placeholder="Outstanding description" value={description} onChange={handleChange} required />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-primary w-full rounded-lg">Add Event</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default EventForm;
