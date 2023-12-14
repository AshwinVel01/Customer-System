// Function to fetch data (Read operation)
function fetchData() {
    fetch('https://your-api-endpoint.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Work with the data received from the API
        console.log('Fetched data:', data);
        // You can perform operations with the fetched data here
      })
      .catch(error => {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Function to create data (POST operation)
function createData(newData) {
    fetch('https://your-api-endpoint.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Created data:', data);
        // Handle the created data
      })
      .catch(error => {
        console.error('There was a problem with creating data:', error);
      });
  }
  
  // Usage example:
  const newData = {
    pic: 'https://example.com/profile.jpg',
    fname: 'John',
    lname: 'Doe',
    address: '123 Main Street',
    city: 'Example City',
    state: 'Example State',
    email: 'john@example.com',
    phone: '123-456-7890',
  };
  
  // Call createData function with newData object
  createData(newData);
  
  
  // Function to update data (PUT operation)
  function updateData(updatedData) {
    fetch('https://your-api-endpoint.com/data', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Updated data:', data);
        // Handle the updated data
      })
      .catch(error => {
        console.error('There was a problem with updating data:', error);
      });
  }
  
  // Function to delete data (DELETE operation)
  function deleteData(idToDelete) {
    fetch(`https://your-api-endpoint.com/data/${idToDelete}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Data deleted successfully');
        // Handle the deletion success
      })
      .catch(error => {
        console.error('There was a problem with deleting data:', error);
      });
  }
  