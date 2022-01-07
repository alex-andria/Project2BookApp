import React, {useState} from "react";
import Modal from 'react-modal';

function BookAddForm({onAddBook}){
    //Modal Info
        const customStyles = {
            content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            },
        };

        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#000';
        }

        function closeModal() {
            setIsOpen(false);
        }

        Modal.setAppElement('#root');

    //End Modal Info

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [listCat, setListCat] = useState("")
  
    function handleSubmit(e){
      e.preventDefault();
  
      const newBookObj = {
        "title": title,
        "author": author,
        [listCat]: true,
      }
  
      fetch(
        ('http://localhost:3000/books'),
        {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newBookObj),
        })
      .then(r => r.json())
      .then(book => onAddBook(book))
    }
  
    return (
        <div className="BookBoxItemAdd">
            <div className="BookBoxButton">
                <button className="AddBookButton" onClick={openModal}>+Add New Book</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Book Form</h2>
                    <div>Add New Book</div>
                        <form className="new-book-form" onSubmit={handleSubmit}>
                            <input placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                            <br></br>
                            <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                            <br></br>
                            <select onChange={(e) => setListCat(e.target.value)}>
                                <option value="All">Select Book List Category</option>
                                <option value="toRead">To Read</option>
                                <option value="reading">Reading</option>
                                <option value="finished">Finished Reading</option>
                            </select>
                            <br></br>
                            <input type="submit" value="Add Book" />
                        </form>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>
    );
}

export default BookAddForm;