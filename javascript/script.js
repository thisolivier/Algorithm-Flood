function great_flood(bad_world){
    this.bad_world = bad_world;
    this.flooded_int = 0;
    this.backlog = new SSL();
    this.god_x;
    this.god_y;
    this.baddy;

    for (this.god_y = 0; this.god_y < this.bad_world.length; this.god_y++){
        this.bad_row = this.bad_world[god_y];
        for (this.god_x = 0; this.god_x < this.bad_row.length; this.god_x++){
            this.baddy = this.bad_row[god_x];
            if (typeof this.baddy == "number"){
                // Change this to a continue conditional
                this.backlog.head = null;
                var debris = flood.call(this, god_x, god_y);
                this.flooded_int += debris;
            } else {
                console.log("Already flooded x:" + god_x + " y:" + god_y);
                console.log("=============")
            }
        }
    }
    return this.flooded_int + " sections purged.";    
}

function flood(x, y) {
    console.log("The flood has been called at x:" + x + " y:" + y)
    this.bad_world[y][x] = true;
    check = [
        [x+1, y],[x-1, y],
        [x, y+1],[x, y-1]
    ];
    
    for (var i = 0; i < 4; i++){
        var ch_x = check[i][0];
        var ch_y = check[i][1];
        if (this.bad_world[ch_y] != undefined){
            pos_val = this.bad_world[ch_y][ch_x];
            if (pos_val == this.baddy && typeof pos_val == "number"){
                console.log("C"+ (i+1) +" - Matches for value " + pos_val)
                this.bad_world[ch_y][ch_x] = false;
                this.backlog.add([ch_x, ch_y]);
            }
        }
    }
    if(x == this.god_x && y == this.god_y && this.backlog.head == null){
        console.log("Mountain at " + this.god_x + " " + this.god_y + " value of " + this.baddy)
        console.log("=============");
        return 0;
    } else if (this.backlog.head == null){
        console.log("Valley of " + this.baddy +"s at position " + this.god_x + " " + this.god_y)
        console.log("=============");
        return;
    }
    next = this.backlog.pop();
    console.log("The flood speads to x:" + next[0] + " y:" + next[1]);
    flood.call(this, next[0], next[1]);
    return 1;
}

function SSL(){
    this.head = null;
    this.add = function(add_value){
        console.log("Adding to list")
        this.head = new Item(add_value, this.head);
    }
    this.pop = function(){
        if (this.head == null){
            console.log ("Queue empty");
            return undefined
        } else {
            return_node = this.head
            this.head = this.head.next
            return return_node.value
        }
    }
}

function Item(my_value, old_list){
    this.next = old_list;
    this.value = my_value;
}



$(document).ready(function(){
    test_array = [
        [0,1,0,0,2,3,0,1],
        [0,1,0,2,3,1,1,1],
        [1,1,1,1,3,3,3,3]
    ]
    render_map(test_array);
    console.log(great_flood(test_array));
});

