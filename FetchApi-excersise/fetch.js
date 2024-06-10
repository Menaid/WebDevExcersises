fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const usersDiv = document.getElementById("users");
    data.forEach((user) => {
      const userParagraph = document.createElement("p");
      userParagraph.textContent = `${user.name} - ${user.email}`;
      usersDiv.appendChild(userParagraph);
    });
  })

  .catch((error) => {
    console.error("Error fetching user data: ", error);
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent("An error occurred while fetching user data");
    usersDiv.appendChild(errorParagraph);
  });

function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const paragraph = document.createElement("p");
  const usersDiv = document.getElementById("messages");
  usersDiv.innerHTML = "";
  if (title === "" || body === "") {
    paragraph.textContent = "Empty fields";
    usersDiv.appendChild(paragraph);
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((response) => {
        if (response.ok) {
          paragraph.textContent = `${title}  ${body}`;
          usersDiv.appendChild(paragraph);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
        const errorParagraph = document.createElement("p");
        errorParagraph.textContent(
          "An error occurred while fetching user data"
        );
        usersDiv.appendChild(errorParagraph);
      });
  }
}
