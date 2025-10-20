
/**
 * 
 * @param desc 
 * @param link 
 * @returns 
 */
function Card(title?: string, desc?: string, link?: string){
    return (
        <div className="m-2 p-2" onClick={() => console.log(link)}>
            <h1 className="h-1">{title}</h1>
            <hr/>
            <p>{desc}</p>
        </div>
    )
}

export {Card}