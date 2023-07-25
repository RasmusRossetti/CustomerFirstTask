// Function to fetch data from the API
async function fetchData() {
  const url = "https://reqres.in/api/users/"

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

// Function to fetch detailed user data using the provided user ID
async function fetchDetailedUserData(userId) {
  // The URL to fetch data for the specific user
  const url = `https://reqres.in/api/users/${userId}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const detailedUserData = await response.json()
    return detailedUserData
  } catch (error) {
    console.error("Error fetching detailed user data:", error)
    throw error
  }
}
