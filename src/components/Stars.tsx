
export default function Stars(prop : {review: number}) {
    const stars = [11,12,13,14,15];
    const filledStar = "fa-solid fa-star fa-sm text-amber-200";
    const emptyStar = "fa-regular fa-star fa-sm"
        return(
            <div className="flex gap-2">
                {stars.map((n,i)=>{
                    return <i key={n} className={i+1<=prop.review ? filledStar:emptyStar}></i>
                })}
            </div>
        )
    }