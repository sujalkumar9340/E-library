
function Book({item}) {
  return (
    <div className="container">
       <div class="container text-center">
  <div class="row books-row">
    <div class="col tittle">
    <p> Tittle: {item.volumeInfo.title} </p>
    </div>
    <div class="col author">
      <p>author: {item.volumeInfo.authors}</p>
    </div>
    <div class="col image"> 
        <img src={item.volumeInfo.imageLinks?.smallThumbnail} alt="books" />
    </div>
    <div class="col published">
      <p>published Date: {item.volumeInfo.publishedDate}</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Book
