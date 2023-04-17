function All(){
    function insert(list, index, value){
        let length = list.length;
        index = index - 1;
        for(let i= length - 1;i >= index;i--){
            list[i+1] = list[i];
        }
        list[index] = value;
        return list;
    }
    return {
        insert
    };
}
module.export =  All;
