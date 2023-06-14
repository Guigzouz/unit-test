export default function Listing({data}: {data: { id: number; name: string; }[]}) {
    return (
        <div>
            <ul>
                {data.map((item) => {
                    return(
                        <li data-testid="li-key" key={item.id}>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}