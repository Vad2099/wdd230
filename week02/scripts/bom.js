const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener for the button click
button.addEventListener('click', () => {
  // Check if the input field is not blank
  if (input.value.trim() !== '') {
    // Create a list item element
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');
    
    // Set the text content of the list item to the input value
    li.textContent = input.value;

    // Set the delete button text content to '❌'
    deleteButton.textContent = '❌';
    
    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the unordered list
    list.appendChild(li);

    // Add event listener to the delete button to remove the list item
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Clear the input field and send focus back to it
    input.value = '';
    input.focus();
  } else {
    // Optionally provide feedback if the input is blank
    alert('Please enter a Book of Mormon chapter.');
    input.focus(); // Return focus to the input field
  }
});
