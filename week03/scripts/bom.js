const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray with the stored list or an empty array
let chaptersArray = getChapterList() || [];

// Populate the list with the stored chapters
chaptersArray.forEach(chapter => {
  displayList(chapter); 
});

// Event listener for the button click
button.addEventListener('click', () => {
  // Check if the input field is not blank
  if (input.value.trim() !== '') {
    // Call displayList to output the submitted chapter
    displayList(input.value);

    // Add the chapter to the array
    chaptersArray.push(input.value);

    // Update localStorage with the new array
    setChapterList();

    // Clear the input and set focus back to it
    input.value = '';
    input.focus();
  } else {
    // Optionally provide feedback if the input is blank
    alert('Please enter a Book of Mormon chapter.');
    input.focus(); // Return focus to the input field
  }
});

// Function to display a chapter in the list
function displayList(item) {
  // Create a list item element
  const li = document.createElement('li');

  // Create a delete button
  const deleteButton = document.createElement('button');
  
  // Set the text content of the list item to the item value
  li.textContent = item;

  // Set the delete button text content to '❌'
  deleteButton.textContent = '❌';
  
  // Append the delete button to the list item
  li.appendChild(deleteButton);

  // Append the list item to the unordered list
  list.appendChild(li);

  // Add event listener to the delete button to remove the chapter
  deleteButton.addEventListener('click', () => {
    deleteChapter(item);
    list.removeChild(li); // Remove the list item
  });
}

// Function to update localStorage with the current chaptersArray
function setChapterList() {
  localStorage.setItem('chaptersList', JSON.stringify(chaptersArray));
}

// Function to get the list of chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('chaptersList'));
}

// Function to delete a chapter from the list and localStorage
function deleteChapter(chapter) {
  // Remove the ❌ from the chapter string
  chapter = chapter.slice(0, chapter.length - 1);

  // Filter out the chapter to be removed from the array
  chaptersArray = chaptersArray.filter(item => item !== chapter);

  // Update localStorage with the new array
  setChapterList();
}
