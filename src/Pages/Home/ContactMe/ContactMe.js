import React from 'react';
import { toast } from 'react-hot-toast';

const ContactMe = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(e.target);

        fetch("https://getform.io/f/65c0c2d4-c54b-47c1-838f-a0350a6ef4b0", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
            .then(response => {
                console.log(response);
                toast.success("Your message has been sent Successfully");
                e.target.reset();
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <div className="row pb-3">
                    <div className="col-md-6 pb-3 pb-md-0">
                        <label htmlFor="name">Name</label>
                        <input className='form-control' type="text" name="name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="E-mail">E-mail</label>
                        <input className='form-control' type="email" name="email" required />
                    </div>
                </div>
                <input className='form-control' type="hidden" name="_gotcha" style={{ display: "none !important" }} />

                <div className="pb-3">
                    <label htmlFor="message">Message</label>
                    <textarea className='form-control' name="textarea" rows="6" required></textarea>
                </div>

                <button className='btn btn-primary' type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactMe;