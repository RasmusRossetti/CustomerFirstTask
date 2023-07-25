// Function to close the modal
function closeModal() {
  const modal = document.getElementById("user-modal")
  modal.style.display = "none"
}

// Function to display detailed user data in the modal
async function displayDetailedUserDataInModal(userId) {
  try {
    const detailedUserData = await fetchDetailedUserData(userId)

    // Get the user-modal element from the HTML
    const modal = document.getElementById("user-modal")
    const modalContent = modal.querySelector(".modal-content")

    // Clear any existing content in the modal
    modalContent.innerHTML = `
        <div class="user-details">
          <h2>Employee Details</h2>
          <p>Email: ${detailedUserData.data.email}</p>
          <p>Name: ${detailedUserData.data.first_name} ${detailedUserData.data.last_name}</p>
          <img src="${detailedUserData.data.avatar}" alt="Avatar">
          <p class="close-button" onclick="closeModal()">Close</p>
        </div>
      `

    // Display the modal
    modal.style.display = "block"
  } catch (error) {}
}

// Update the displayData function to include click event handling on user cards
async function displayData() {
  try {
    const users = await fetchData()

    // Get the data-container element from the HTML
    const dataContainer = document.getElementById("data-container")

    // Clear any existing content in the container
    dataContainer.innerHTML = ""

    // Loop through the fetched data and create HTML elements to display it
    users.data.forEach((user) => {
      const cardElement = document.createElement("div")
      cardElement.classList.add("card")
      cardElement.innerHTML = `
          <div onclick="displayDetailedUserDataInModal(${user.id})">
            <img src="${user.avatar}" alt="Avatar">
            <h4><b>${user.first_name} ${user.last_name}</b></h4>
            <p>${user.email}</p>
          </div>
        `
      dataContainer.appendChild(cardElement)
    })
  } catch (error) {
    // Handle errors
  }
}

// Call the displayData function to show the data in the HTML file
displayData()
