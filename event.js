const form = document.getElementById("form");
const comment = document.getElementById("comment");
const createBtn = document.getElementById("createBtn");
const typedWords = document.getElementById("typedWords");
const allowedWords = document.getElementById("allowedWords");
const message = document.getElementById("message");

const totalChars = 250;
const typedChars = 0;
allowedWords.textContent = totalChars;
typedWords.textContent = typedChars;

comment.addEventListener("input", () => {
    const userComment = comment.value.trim();
    
    typedWords.textContent = userComment.length;

    comment.classList.toggle("red", userComment.length > totalChars);
    

    createBtn.disabled = userComment.length === 0;

    createBtn.classList.toggle("allowed", userComment.length >= 1);


});

const comments = [];

function displayComment () {
    console.log(comments);
    
}
displayComment()

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userComment = comment.value.trim();
    
    if (userComment.length < 1) {
        return;
    };

    if (userComment.length > totalChars) {
        message.textContent = "You are exceeding allowed characters!";
    } else {
        comments.push(userComment);
        form.reset();
    
        displayComment();
    
        message.textContent = "Your comment has been added!"
    }


    setTimeout(() => message.textContent = "", 4000);
    

})