import {FaXmark} from 'react-icons/fa6';
import {useState} from 'react';

const EventForm = () => {
    const [{title, location, date, image, description}, setFormState] = useState({
        title: '',
        location: '',
        date: '',
        image: '',
        description: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(previousState => ({
            ...previousState,
            [name]: value
        }));
    }

    console.log(title, location, date, image, description);

    return (
        <dialog id="event-form" className="modal">
            <div className="modal-box h-fit p-8">
                <form method="dialog">
                    <button className="absolute text-2xl right-2 top-2">
                        <FaXmark />
                    </button>
                </form>
                <h3 className="font-bold text-lg text-center mb-8">ADD NEW EVENT</h3>
                <form>
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
                        <input name="image" type="text" autoComplete="off" placeholder="https://via.assets.so/img.jpg?w=500&h=300" value={image} onChange={handleChange} />
                        <label htmlFor="image">Image</label>
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
