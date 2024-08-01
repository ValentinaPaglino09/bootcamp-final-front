


export const avgRating = ( reviews ) => {

    if (reviews.length == 0) return {value: 0, totalReviews: 0}
   
    const arr = reviews.map( review => review.rating )
    const initialVal = 0;
    const totalRev = arr.length;
    
    const sum = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialVal,);
    return {value: Math.round((sum / totalRev) * 10) / 10, totalReviews: totalRev}

}