import React from 'react';

const CaptchaForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Name" />
      <input type="email" name="email" required placeholder="Email" />

      <cap-widget
        id="cap"
        data-cap-api-endpoint="https://cap.warrenwebsites.co.uk/efce6160be/"
        data-cap-hidden-field-name="cap-token"
        onsolve={`this.closest('form').querySelector('button[type="submit"]').disabled = false;`}
        style={{ display: 'block', margin: '20px 0' }}
      />

      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
};

export default CaptchaForm;
