import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
        errors.name = "Campo obligatorio";
        }

        if (!phone.trim()) {
        errors.phone = "Campo obligatorio";
        }

        if (!email.trim() || !email.includes("@")) {
        errors.email = "Campo obligatorio";
        }

        return errors;
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
        const userData = {
            name,
            phone,
            email,
        };

        onConfirm(userData);
        } else {
        setErrors(validationErrors);
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();

        setName("");
        setPhone("");
        setEmail("");
        setErrors({});
    };

  return (
    <div className="center-container">
      <div className="container mx-auto p-4">
        <form className="max-w-md mx-auto">
          <label className="block mb-2">
            Nombre
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-400"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </label>

          <label className="block mb-2">
            Teléfono
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-400"
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </label>

          <label className="block mb-2">
            Correo Electrónico
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-400"
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </label>

          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded ml-2"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default CheckoutForm;
