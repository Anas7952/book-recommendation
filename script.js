let userName = "";
let selectedGenre = "";
let selectedLanguage = "";

const books = {
  horror: {
    english: ["The Haunting of Hill House", "It", "Dracula"],
    hindi: ["भूतनाथ", "चंद्रकांता संतति", "डरावनी रातें"],
    spanish: ["La Casa de los Espíritus", "Drácula", "El Cuervo"]
  },
  comedy: {
    english: ["Good Omens", "The Hitchhiker's Guide to the Galaxy", "Bossypants"],
    hindi: ["हास्य रस", "काका हाथरसी की चुटकुले", "शरद जोशी की रचनाएँ"],
    spanish: ["Sin noticias de Gurb", "El asombroso viaje de Pomponio Flato", "La Tregua"]
  }
};

function goToGenre() {
  const nameInput = document.getElementById("name").value.trim();
  if (nameInput === "") {
    alert("Please enter your name");
    return;
  }
  userName = nameInput;
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function selectGenre(genre) {
  selectedGenre = genre;
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function selectLanguage(language) {
  selectedLanguage = language;

  const list = books[selectedGenre][selectedLanguage];
  document.getElementById("bookList").innerHTML = list.map(book => `<li>${book}</li>`).join("");

  document.getElementById("step3").classList.add("hidden");
  document.getElementById("greeting").textContent = `Hi ${userName}, here are your ${selectedLanguage.toUpperCase()} ${selectedGenre.toUpperCase()} books!`;
  document.getElementById("result").classList.remove("hidden");
}
