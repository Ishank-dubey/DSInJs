function All(){
    function insert(list, index, value){
        let length = list.length;
        index = index - 1;
        for(let i= length - 1;i >= index;i--){
            list[i+1] = list[i];
        }
        list[index] = value;
        return list;
    }// O(n) worse case, average insert of first n+1 will be O(1)

    function deleteOP(list, item){
        let length = list.length;
        let index;
        for(let i=0;i < length;i++){
            if(item == list[i]){
                index = i;
                break;
            }
        }
        if(!index) {
            return list;
        }
        for(let j=index;j < length -1 ;j++){
            list[j] = list[j+1];
        }
        list.pop();
        return list;
    }//O(n)

     //findBiggest in the DS.js

    return {
        insert,
        deleteOP
    };
}
module.export =  All;
