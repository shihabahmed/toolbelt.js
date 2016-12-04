var toolbelt = require('./src/toolbelt');

var Json = toolbelt.Json,
    ArrayList = toolbelt.ArrayList,
    StringContent = toolbelt.StringContent,
    QueryString = toolbelt.QueryString;

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

console.log(friends);

var array = new ArrayList([1, 2, 3, 4]);

array.add(5);

console.log(array.get());

var q = new QueryString('http://localhost?module=querystring&test=1');
console.log(q.count);