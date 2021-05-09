document.addEventListener('DOMContentLoaded', () => {
    console.log('js loaded');

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
    artistListItem.classList.add();

    const artist = document.createElement('h2');
    artist.textContent = form.artist.value;
    artistListItem.appendChild(artist);

    const field = document.createElement('p');
    field.textContent = form.field.value;
    artistListItem.appendChild(field);

    const artPiece = document.createElement('p');
    artPiece.textContent = form.art_piece.value;
    artistListItem.appendChild(artPiece);

    return artistListItem;
}

const handleDeleteClick = function () {
    const artistList = document.querySelector('#artist-list');
    artistList.innerHTML = '';
  }
  