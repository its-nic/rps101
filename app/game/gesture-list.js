import Gesture from "./gesture";

export default function GestureList({gestures, onGestureClick}) {

    return(
        <div className="flex justify-center flex-wrap">
            {gestures != null && gestures.map((gesture) => (
                <Gesture key={gesture.name} gesture={gesture} onGestureClick={onGestureClick}/>
            ))}
        </div>
    );
}