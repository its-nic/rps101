export default function Gesture({name, onGestureClick}) {

    return(
        <button className="p-4 min-w-32 max-w-32 hover:bg-slate-700 rounded-xl" onClick={() => onGestureClick(name)}>
            <h2 className="text-sm text-center">{name}</h2>
            <img
                src={(`/img/${name}.png`)}
                onError={({currentTarget}) => {
                    currentTarget.onError = null;
                    currentTarget.src=(`/img/${name}.gif`);
                }}
            />
        </button>
    );
}