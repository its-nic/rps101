export async function GET() {
    const gestures = [
        {name: "DYNAMITE", type: "png"},
        {name: "TORNADO", type: "png"},
        {name: "QUICKSAND", type: "png"},
        {name: "PIT", type: "png"},
        {name: "CHAIN", type: "png"},
        {name: "GUN", type: "png"},
        {name: "LAW", type: "png"},
        {name: "WHIP", type: "png"},
        {name: "SWORD", type: "png"},
        {name: "ROCK", type: "png"},
        {name: "DEATH", type: "png"},
        {name: "WALL", type: "png"},
        {name: "SUN", type: "png"},
        {name: "CAMERA", type: "png"},
        {name: "FIRE", type: "png"},
        {name: "CHAINSAW", type: "png"},
        {name: "SCHOOL", type: "png"},
        {name: "SCISSORS", type: "png"},
        {name: "POISON", type: "gif"},
        {name: "CAGE", type: "png"},
        {name: "AXE", type: "png"},
        {name: "PEACE", type: "png"},
        {name: "COMPUTER", type: "png"},
        {name: "CASTLE", type: "png"},
        {name: "SNAKE", type: "png"},
        {name: "BLOOD", type: "png"},
        {name: "PORCUPINE", type: "png"},
        {name: "VULTURE", type: "png"},
        {name: "MONKEY", type: "png"},
        {name: "KING", type: "png"},
        {name: "QUEEN", type: "png"},
        {name: "PRINCE", type: "png"},
        {name: "PRINCESS", type: "png"},
        {name: "POLICE", type: "png"},
        {name: "WOMAN", type: "png"},
        {name: "BABY", type: "gif"},
        {name: "MAN", type: "png"},
        {name: "HOME", type: "png"},
        {name: "TRAIN", type: "png"},
        {name: "CAR", type: "gif"},
        {name: "NOISE", type: "png"},
        {name: "BICYCLE", type: "png"},
        {name: "TREE", type: "png"},
        {name: "TURNIP", type: "png"},
        {name: "DUCK", type: "png"},
        {name: "WOLF", type: "png"},
        {name: "CAT", type: "png"},
        {name: "BIRD", type: "png"},
        {name: "FISH", type: "gif"},
        {name: "SPIDER", type: "png"},
        {name: "COCKROACH", type: "png"},
        {name: "BRAIN", type: "png"},
        {name: "COMMUNITY", type: "png"},
        {name: "CROSS", type: "png"},
        {name: "MONEY", type: "gif"},
        {name: "VAMPIRE", type: "png"},
        {name: "SPONGE", type: "png"},
        {name: "CHURCH", type: "png"},
        {name: "BUTTER", type: "png"},
        {name: "BOOK", type: "png"},
        {name: "PAPER", type: "png"},
        {name: "CLOUD", type: "png"},
        {name: "AIRPLANE", type: "png"},
        {name: "MOON", type: "png"},
        {name: "GRASS", type: "png"},
        {name: "FILM", type: "png"},
        {name: "TOILET", type: "png"},
        {name: "AIR", type: "png"},
        {name: "PLANET", type: "png"},
        {name: "GUITAR", type: "png"},
        {name: "BOWL", type: "png"},
        {name: "CUP", type: "png"},
        {name: "BEER", type: "png"},
        {name: "RAIN", type: "png"},
        {name: "WATER", type: "png"},
        {name: "TV", type: "gif"},
        {name: "RAINBOW", type: "png"},
        {name: "UFO", type: "png"},
        {name: "ALIEN", type: "png"},
        {name: "PRAYER", type: "png"},
        {name: "MOUNTAIN", type: "png"},
        {name: "SATAN", type: "png"},
        {name: "DRAGON", type: "png"},
        {name: "DIAMOND", type: "png"},
        {name: "PLATINUM", type: "gif"},
        {name: "GOLD", type: "gif"},
        {name: "DEVIL", type: "png"},
        {name: "FENCE", type: "png"},
        {name: "VIDEO GAME", type: "gif"},
        {name: "MATH", type: "png"},
        {name: "ROBOT", type: "gif"},
        {name: "HEART", type: "png"},
        {name: "ELECTRICITY", type: "png"},
        {name: "LIGHTNING", type: "png"},
        {name: "MEDUSA", type: "png"},
        {name: "POWER", type: "png"},
        {name: "LASER", type: "png"},
        {name: "NUKE", type: "png"},
        {name: "SKY", type: "png"},
        {name: "TANK", type: "png"},
        {name: "HELICOPTER", type: "png"},    
    ];

    return new Response(JSON.stringify(gestures), {status: 200});
}