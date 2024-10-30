import {FaXmark} from 'react-icons/fa6';

const EventForm = () => {
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
                        <input id="form-title" type="text" placeholder="Impressive event title" required />
                        <label htmlFor="form-title">Title</label>
                    </div>
                    <div className="input-field">
                        <input id="form-location" type="text" autoComplete="off" placeholder="Amazing event location" required />
                        <label htmlFor="form-location">Location</label>
                    </div>
                    <div className="input-field">
                        <input id="form-date" type="date" required />
                        <label htmlFor="form-date" className="hidden">Date</label>
                    </div>
                    <div className="input-field">
                        <input id="form-img" type="text" autoComplete="off" placeholder="https://via.assets.so/img.jpg?w=500&h=300" />
                        <label htmlFor="form-img">Image</label>
                    </div>
                    <div className="input-field">
                        <textarea id="form-description" placeholder="Outstanding description" required />
                        <label htmlFor="form-description">Description</label>
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
