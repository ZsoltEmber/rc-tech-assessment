type HeroComponentProps = {
    id: number;
    name: string;
    available: boolean;
    handleClick: (id: number) => void;
};



export default function HeroComponent({id, name, available, handleClick}: HeroComponentProps) {


    return (
        <div className={"hero"}>
            <span>{id + ". "}</span><span style={available? {color:"green"} : {color: "red"}} onClick={()=>handleClick(id)} >{name}</span>
        </div>
    )
}