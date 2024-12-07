export default function Gesture({gesture, onGestureClick}) {

    return(
        <button className="p-4 min-w-32 max-w-32 hover:bg-slate-700 rounded-xl" onClick={() => onGestureClick(gesture)}>
            <h2 className="text-sm text-center">{gesture.name}</h2>
            <img src={(`/img/${gesture.name}.${gesture.type}`)} alt={(`Gesture for ${gesture.name}`)}/>
        </button>
    );
}