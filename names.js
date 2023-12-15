
    const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
    let currentIndex = 0
    let nameElement = document.getElementById("next");
 
    nameElement.innerText = names[currentIndex];

    // Function to show the next name
    const next = () => {
        currentIndex = (currentIndex + 1) % names.length;
        nameElement.innerText = names[currentIndex];
    };

    // Function to show the previous name
    const previous = () => {
        currentIndex = (currentIndex - 1 + names.length) % names.length;
        nameElement.innerText = names[currentIndex];
    };
