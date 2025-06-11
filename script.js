function handleSubmit(event) {
    event.preventDefault();
    alert("🎉 Thank you for registering! We'll see you at the event.");
    document.querySelector('form').reset();
    return false;
  }