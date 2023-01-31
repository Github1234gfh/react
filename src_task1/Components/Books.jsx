import { Book } from "./Book"

export const Books = ({ Bookss }) => {

    return (
        <div className="books"> 
            {Bookss.map(elem => {
                return (
                    <p key={elem.name} className='book'>
                        <Book book={elem.name} />
                    </p>
                )
            })}
        </div>
    )
}