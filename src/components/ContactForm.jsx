// src/components/ContactForm.jsx
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    if (!isValidPhoneNumber(phone)) {
      return;
    }
    console.log({ ...data, phone });
    setSuccess(true);
  };

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8">
        Contact us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Speak with our team to see how we can help
      </p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {success ? (
          <p className="text-green-500 text-center">Form submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <PhoneInput
                placeholder="Best contact number"
                value={phone}
                onChange={setPhone}
                defaultCountry="US"
                className="w-full p-2 border rounded-lg"
              />
              {phone && !isValidPhoneNumber(phone) && (
                <p className="text-red-500">Invalid phone number</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Business or company name"
                {...register('company')}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;