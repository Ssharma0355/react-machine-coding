import React, { useState, useEffect } from 'react';

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name:"", email:"", message:""
    }
    )
    const {name, email, message} = formData;
    const [isSubmitting, setIsSubmitting] = useState(false);

  // BUG 1: The junior dev used useEffect for validation
const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData(prev =>({
        ...prev,
        [name]:value
    }));
}
const isFormValid =
name.length > 0 &&
email.includes('@') &&
message.length > 10;

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    
    // Simulating an API call
    setTimeout(() => {
      console.log("Submitted:", name, email, message);
      setIsSubmitting(false);
      setFormData({
        name:"",
        email:"",
        message:""
      })
    
    }, 2000);
    
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px', padding: '20px' }}>
      <h2>Send Feedback</h2>
      
      <input 
        name='name'
        placeholder="Name" 
        value={name} 
        onChange={handleChange} 
      />
      <input 
      name='email'
        type="email"
        placeholder="Email" 
        value={email} 
        onChange={handleChange} 
      />
      <textarea 
      name='message'
        placeholder="Message (min 10 chars)" 
        value={message} 
        onChange={handleChange} 
        rows={4}
      />
      
      <button 
        onClick={handleSubmit} 
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}