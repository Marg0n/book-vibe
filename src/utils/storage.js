import toast from 'react-hot-toast';

//functions for getting and setting for read

export const getReadBooks = () => {

    let readBook = [];
    //try to get data from local storage
    const storedBooks = localStorage.getItem('readBook');

    if (storedBooks) {
        readBook = JSON.parse(storedBooks);
    }

    return readBook;
}

//functions for getting and setting for wishlist

export const getWishlist = () => {


    let wishlistBook = [];
    //try to get data from local storage
    const wishlistBooks = localStorage.getItem('wishlistBook');

    if (wishlistBooks) {
        wishlistBook = JSON.parse(wishlistBooks);
    }

    return wishlistBook;
}

//----------------------------------------------------------------

//read save toast

export const saveReadBooks = (Item) => {

    let books = getReadBooks();

    //check if the blog already exists
    const isExists = books.find(b => b.bookId === Item.bookId);
    console.log(isExists)


    if (isExists) {
        return toast.error('Reading finished!');
    }
    books.push(Item);

    //setting in localStorage
    localStorage.setItem('readBook', JSON.stringify(books));
    toast.success('Successfully finished reading!');
}

//wishlist save toast

export const saveWishlist = (Item) => {

    let books = getWishlist();
    let read = getReadBooks();

    //check if the blog already exists
    const isExists = books.find(b => b.bookId === Item.bookId);


    const isReadExists = read.find(b => b.bookId === Item.bookId);


    if (isReadExists) {
        return toast.error('Already finished Reading!');
    }
    else if (isExists) {
        return toast.error('Already in the Wishlist!');
    }
    books.push(Item);

    //setting in localStorage
    localStorage.setItem('wishlistBook', JSON.stringify(books));
    toast.success('Successfully added to the Wishlist!');
}

//----------------------------------------------------------------

//delete toast

export const deleteReadBooks = (id) => {

    let books = getReadBooks();

    //creating a new var in which the blog in question is not present
    const remainingBooks = books.filter(b => b.id !== id);

    //setting in localStorage
    localStorage.setItem('readBook', JSON.stringify(remainingBooks));
    toast.success('Removed from Read!');
}

export const deleteWishlist = (id) => {

    let books = getWishlist();

    //creating a new var in which the blog in question is not present
    const remainingBooks = books.filter(b => b.id !== id);

    //setting in localStorage
    localStorage.setItem('wishlistBook', JSON.stringify(remainingBooks));
    toast.success('Removed from Wishlist!');
}