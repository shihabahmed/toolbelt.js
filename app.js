var toolbox = require('./src/toolbox');

var Json = toolbox.Json,
    ArrayList = toolbox.ArrayList;

var friends = {
    "friends": [{
            "id": 0,
            "name": "Hatfield Owen"
        },
        {
            "id": 1,
            "name": "Marquita Hopper"
        },
        {
            "id": 2,
            "name": "Riggs Rice"
        }
    ]
};

var json = new Json(friends);

// var friends = json.get('friends');
var friends = json.get().friends;

friends.forEach(frnd => {
    let friend = new Json(frnd);
    let names = friend.get('name').split(' ');
    friend.set('firstname', names[0]);
    friend.set('lastname', names[1]);
});


var array = new ArrayList([1, 2, 3, 4]);

array.add(5);

console.log(array.get());