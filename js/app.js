document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
  
    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', handleDeleteClick);
  })

const handleFormSubmit = function (event) {
    event.preventDefault();
    const artistListItem = createArtistListItem(event.target);
    const artistList = document.querySelector('#artist-list');
    artistList.appendChild(artistListItem);

    event.target.reset();
}

const createArtistListItem = function (form) {
    const artistListItem = document.createElement('li');
    artistListItem.classList.add('#artist-list-item');  // turns artistListItem into a list and asignes a class name to it 

    const artist = document.createElement('h2');
    artist.textContent = form.artist.value;             // adds the newly created li(artistListItem) 
    artistListItem.appendChild(artist);                 // to an ul(artistList) that we created above
    const field = document.createElement('p');
    field.textContent = form.field.value;
    artistListItem.appendChild(field);

    const artPiece = document.createElement('p');
    artPiece.textContent = form.art_piece.value;
    artistListItem.appendChild(artPiece);

    return artistListItem;
}

const handleDeleteClick = function (event) {
    const artistList = document.querySelector('#artist-list');
    artistList.innerHTML = '';
  }
  