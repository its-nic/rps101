export default function Gesture({name}) {

    return(
        <div>
            <h2 className="font-bold text-2xl pb-4">{name}</h2>
            <img 
                src={(`/img/${name}.png`)}
                onError={({currentTarget}) => {
                    console.log("image error")
                    currentTarget.onError = null;
                    currentTarget.src=(`/img/${name}.gif`);
                }}
            />
        </div>
    );
}