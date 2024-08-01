


export const avgRating = ( reviews ) => {

    const arr = reviews.map( review => review.rating )
    const initialVal = 0;
    const totalRev = arr.length;
    
    const sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialVal,);
    
    return sum / totalRev;

}