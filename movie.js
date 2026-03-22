const API_KEY = "baf0071b";  

async function search(){
  const name = document.getElementById("mname").value;
  if(name === "") return alert("Enter movie name");

  const url = `https://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`;

  try{
    const res = await fetch(url);
    const data = await res.json();

    if(data.Response === "False"){
      alert("Movie not found");
      return;
    }

    document.getElementById("movie").style.display = "block";
    document.getElementById("poster").src = data.Poster;
    document.getElementById("title").innerText = data.Title;
    document.getElementById("year").innerText = "Year: " + data.Year;
    document.getElementById("rating").innerText = "IMDB Rating: " + data.imdbRating;

  }catch(error){
    alert("Error fetching movie");
  }
}
